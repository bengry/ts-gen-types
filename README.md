# gen-types

Generate and transform existing TypeScript types.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/gen-types.svg)](https://npmjs.org/package/gen-types)
[![Downloads/week](https://img.shields.io/npm/dw/gen-types.svg)](https://npmjs.org/package/gen-types)
[![License](https://img.shields.io/npm/l/gen-types.svg)](https://github.com/gen-types/gen-types/blob/master/package.json)

<!-- toc -->

- [gen-types](#gen-types)
- [Usage](#usage)
- [Commands](#commands)
  <!-- tocstop -->

# Usage

<!-- usage -->

```sh-session
$ npm install -g gen-types
$ gen-types COMMAND
running command...
$ gen-types (-v|--version|version)
gen-types/0.0.0 darwin-x64 node-v10.6.0
$ gen-types --help [COMMAND]
USAGE
  $ gen-types COMMAND
...
```

<!-- usagestop -->

# Commands

<!-- commands -->

- [`gen-types const-enum-to-enum`](#gen-types-const-enum-to-enum)
- [`gen-types help [COMMAND]`](#gen-types-help-command)

## `gen-types const-enum-to-enum`

Generate an enum from a const enum

```
USAGE
  $ gen-types const-enum-to-enum

OPTIONS
  -h, --help                   show CLI help
  -s, --sourceFile=sourceFile  (required) Source file path
  -t, --targetFile=targetFile  (required) Target file path
  --comment=comment            Optional comment to append to the target enum
  --sourceName=sourceName      Name of the const enum in the source file path. Optional if there's only one
  --targetName=targetName      Name of the generated enum. Defaults to sourceName

EXAMPLE
  $ gen-types const-enum-to-enum
```

_See code: [src/commands/const-enum-to-enum.ts](https://github.com/gen-types/gen-types/blob/v0.0.0/src/commands/const-enum-to-enum.ts)_

## `gen-types help [COMMAND]`

display help for gen-types

```
USAGE
  $ gen-types help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.0.5/src/commands/help.ts)_

<!-- commandsstop -->
