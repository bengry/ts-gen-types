# ts-gen-types

Generate and transform existing TypeScript types.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/ts-gen-types.svg)](https://npmjs.org/package/ts-gen-types)
[![Downloads/week](https://img.shields.io/npm/dw/gen-types.svg)](https://npmjs.org/package/ts-gen-types)
[![License](https://img.shields.io/npm/l/ts-gen-types.svg)](https://github.com/bengry/ts-gen-types/blob/master/package.json)

<!-- toc -->
* [ts-gen-types](#ts-gen-types)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->
```sh-session
$ npm install -g ts-gen-types
$ ts-gen-types COMMAND
running command...
$ ts-gen-types (-v|--version|version)
ts-gen-types/1.1.2 darwin-x64 node-v10.12.0
$ ts-gen-types --help [COMMAND]
USAGE
  $ ts-gen-types COMMAND
...
```
<!-- usagestop -->

# Commands

<!-- commands -->
* [`ts-gen-types const-enum-to-enum`](#ts-gen-types-const-enum-to-enum)
* [`ts-gen-types help [COMMAND]`](#ts-gen-types-help-command)

## `ts-gen-types const-enum-to-enum`

Generate an enum from a const enum

```
USAGE
  $ ts-gen-types const-enum-to-enum

OPTIONS
  -h, --help                   show CLI help
  -q, --singleQuote            Use single quotes instead of double quotes. Defaults to false.
  -s, --sourceFile=sourceFile  (required) Source file path
  -t, --targetFile=targetFile  (required) Target file path
  --comment=comment            Optional comment to append to the target enum
  --sourceName=sourceName      Name of the const enum in the source file path. Optional if there's only one
  --targetName=targetName      Name of the generated enum. Defaults to sourceName

EXAMPLE
  $ ts-gen-types const-enum-to-enum -s <sourceFile> -t <targetFile>
```

_See code: [src/commands/const-enum-to-enum.ts](https://github.com/bengry/ts-gen-types/blob/v1.1.2/src/commands/const-enum-to-enum.ts)_

## `ts-gen-types help [COMMAND]`

display help for ts-gen-types

```
USAGE
  $ ts-gen-types help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.4/src/commands/help.ts)_
<!-- commandsstop -->
