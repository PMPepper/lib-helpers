import path from 'path';
import fs from 'fs';

export default function getFilesInDir(directory, files = []) {
  fs.readdirSync(directory).forEach(file => {

    if(file.indexOf('_') === 0) {
      return;//skip files and directories starting with _
    }

    const absolute = path.join(directory, file);

    if (fs.statSync(absolute).isDirectory()) {
      getFilesInDir(absolute, files);
    } else {
      files.push(absolute);
    }
  });

  return files;
}
