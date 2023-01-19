import {Command, Flags} from '@oclif/core'
import * as fs from 'fs';

export default class TaskCopy extends Command {
  static description = 'command to copy file'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  public async run(): Promise<void> {
    fs.copyFile('/folderA/myfile1.csv', '/folderB/myfile2.csv', (err: any) => {
      if (err) throw err;
      console.log('File was copied to destination');
    });

  }
}
