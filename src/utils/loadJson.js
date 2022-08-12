const fs = require('fs');

function loadJson(filePath) {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
}

module.exports = loadJson;
