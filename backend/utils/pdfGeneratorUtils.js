
const fs = require('fs');
//const path = require('path');
const pdf = require('html-pdf');

class PdfGeneratorUtils {
  static generatePDF = () => {
    const html = fs.readFileSync('report.html', 'utf-8');
    const options = {format: 'A4', orientation: 'portrait', margins: '50px'};
    pdf.create(html, options).toFile('outputPDF1.pdf', (err, res) => {
      if (err){
        console.log('We have an error', err)
      } console.log('PDF generated succefully', res.fileName);
    })
  }
}

module.exports = PdfGeneratorUtils;
