const fs = require('fs');
const path = require('path');
function logStepToFile(stepName, content) {
    const filePath = path.join(__dirname, `output/${stepName}.txt`);
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`[✔] Đã ghi kết quả bước ${stepName} vào: ${filePath}`);
  }
  
module.exports = {
    logStepToFile
};