"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@oclif/core");
const fs = require("fs");
class TaskMove extends core_1.Command {
    async run() {
        // const {args, flags} = await this.parse(TaskMove)
        // const name = flags.name ?? 'world'
        // this.log(`hello ${name} from D:\\CLI_PRACTICE\\testcli\\src\\commands\\task\\move.ts`)
        // if (args.file && flags.force) {
        //   this.log(`you input --force and --file: ${args.file}`)
        // }
        fs.rename('/folderA/myfile1.txt', '/folderB/myfile2.txt', (err) => {
            if (err)
                throw err;
            console.log('File was moved to destination');
        });
    }
}
exports.default = TaskMove;
TaskMove.description = 'command to move file';
TaskMove.examples = [
    '<%= config.bin %> <%= command.id %>',
];
TaskMove.flags = {
    // flag with a value (-n, --name=VALUE)
    name: core_1.Flags.string({ char: 'n', description: 'name to print' }),
    // flag with no value (-f, --force)
    force: core_1.Flags.boolean({ char: 'f' }),
};
TaskMove.args = [{ name: 'file' }];
