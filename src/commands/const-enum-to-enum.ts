import { Command, flags } from '@oclif/command';
import * as fs from 'fs';
import * as path from 'path';
import Project, { EnumMemberStructure } from 'ts-simple-ast';

export default class GenerateEnumFromConstEnum extends Command {
  static description = 'Generate an enum from a const enum';

  static examples = [
    `$ ts-gen-types const-enum-to-enum -s <sourceFile> -t <targetFile>
`,
  ];

  static flags = {
    help: flags.help({ char: 'h' }),
    // flag with a value (-c, --component=VALUE)
    sourceFile: flags.string({ char: 's', description: 'Source file path', required: true }),
    targetFile: flags.string({ char: 't', description: 'Target file path', required: true }),
    sourceName: flags.string({
      description: "Name of the const enum in the source file path. Optional if there's only one",
      required: false,
    }),
    targetName: flags.string({ description: 'Name of the generated enum. Defaults to sourceName', required: false }),
    comment: flags.string({ description: 'Optional comment to append to the target enum', required: false }),
  };

  async run() {
    const { flags } = this.parse(GenerateEnumFromConstEnum);

    await this.generate(flags.sourceFile, flags.targetFile, flags.sourceName, flags.targetName, flags.comment);
  }

  private async generate(
    sourceFilePath: string,
    targetFilePath: string,
    sourceEnumName?: string,
    targetEnumName?: string,
    comment?: string
  ) {
    const sourceProject = new Project();
    const sourceFile = sourceProject.addExistingSourceFile(sourceFilePath);

    const sourceFileEnums = sourceFile.getEnums();
    const sourceEnum = sourceEnumName
      ? sourceFile.getEnum(sourceEnumName)
      : sourceFileEnums.length === 1
        ? sourceFileEnums[0]
        : null;

    if (!sourceEnum) {
      throw new Error('Enum not found source file');
    }

    const outDir = path.join(process.cwd(), path.dirname(targetFilePath));

    if (!fs.existsSync(outDir)) {
      fs.mkdirSync(outDir);
    }

    const outFileName = path.basename(targetFilePath);
    const targetProject = new Project({ compilerOptions: { outDir } });

    const targetFile = targetProject.createSourceFile(path.join(outDir, outFileName), {
      enums: [
        {
          name: targetEnumName || sourceEnum.getName(),
          isExported: true,
          isConst: false,
          docs: [comment || 'Automatically generated. DO NOT MANUALLY MODIFY'],
          members: sourceEnum.getMembers().map<EnumMemberStructure>(member => ({
            name: member.getName(),
            value: member.getValue(),
          })),
        },
      ],
    });

    targetFile.saveSync();
  }
}
