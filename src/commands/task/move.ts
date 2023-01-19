import {Command, Flags} from '@oclif/core'
import * as fs from 'fs';

export default class TaskMove extends Command {
  static description = 'command to move file'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  public async run(): Promise<void> {
    fs.rename('/folderA/myfile1.csv', '/folderB/myfile2.csv', (err: any) => {
      if (err) throw err;
      console.log('File was moved to destination');
    });
    
  }
}
