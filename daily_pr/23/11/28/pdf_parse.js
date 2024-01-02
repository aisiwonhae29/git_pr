let fs = require('fs');
let PDFParser = require('pdf-parse');
let dt;

let pdfFilePath = 'a.pdf';
let databuffer = fs.readFileSync(pdfFilePath);

PDFParser(dataBuffer).then(data => {
    console.log(data.text);
    dt = data;
}).catch(err => {
    console.error('Error parsing PDF:', err);
});

dt;