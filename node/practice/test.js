const crypto = require('crypto');

const data = '12341234';
const hash = crypto.createHash('sha256').update(data).digest('base64');

console.log(hash)