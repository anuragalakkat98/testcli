"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@oclif/core");
const fs = require("fs");
class TaskCopy extends core_1.Command {
    async run() {
        // const {args, flags} = await this.parse(TaskCopy)
        // const name = flags.name ?? 'world'
        // this.log(`hello ${name} from D:\\CLI_PRACTICE\\testcli\\src\\commands\\task\\copy.ts`)
        // if (args.file && flags.force) {
        //   this.log(`you input --force and --file: ${args.file}`)
        // }
        fs.copyFile('/folderA/myfile1.txt', '/folderB/myfile2.txt', (err) => {
            if (err)
                throw err;
            console.log('File was copied to destination');
        });
    }
}
exports.default = TaskCopy;
TaskCopy.description = 'command to copy file';
TaskCopy.examples = [
    '<%= config.bin %> <%= command.id %>',
];
TaskCopy.flags = {
    // flag with a value (-n, --name=VALUE)
    name: core_1.Flags.string({ char: 'n', description: 'name to print' }),
    // flag with no value (-f, --force)
    force: core_1.Flags.boolean({ char: 'f' }),
};
TaskCopy.args = [{ name: 'file' }];
