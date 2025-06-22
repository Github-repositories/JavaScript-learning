const fs = require('fs');
const readEmailIds = () => {
    const sourceFilePath = './emailId.txt';
    const destFilePath = './uniqueEmailId.txt';
    // const destFile = './uniqueEmails.txt';
    const readFile = fs.readFileSync(sourceFilePath, 'UTF-8');
    const uniqueEmailId = [...new Set(readFile.split('\n').map(line => line.trim()).filter(line => line.length > 0))];
    // const uniqueEmailId = [...new Set(readFile.split('\n').map(line => line.trim()))];
    fs.writeFileSync(destFilePath, uniqueEmailId.join('\n'), 'UTF-8');
}
readEmailIds();