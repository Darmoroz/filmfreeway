import fs from 'fs';
import chalk from 'chalk';

export async function appendToJSONFile(filePath, fileName, data) {
  return new Promise((resolve, reject) => {
    fs.appendFile(`${filePath}${fileName}`, `${JSON.stringify(data, null, 4)},\n`, err => {
      if (err) {
        reject(err);
      } else {
        console.log(`Info was add successfully to file: ${chalk.green(filePath + fileName)}`);
        resolve();
      }
    });
  });
}
