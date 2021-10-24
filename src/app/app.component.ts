import { Component } from '@angular/core';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { ExcelService } from './services/excel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'h2p';
  constructor(private excelService: ExcelService) {
    
  }

  data = [{
    id: 1,
    first: 'Mark',
    last: 'Otto',
    handle: '@mdo'
  },
  {
    id: 2,
    first: 'Jacob',
    last: 'Thornton',
    handle: '@fat'
  },
  {
    id: 3,
    first: 'Larry',
    last: 'the Bird',
    handle: '@twitter'
  }];

  captureScreen() {
    const data = document.getElementById('contentToConvert');
    html2canvas(data).then(canvas => {
      // Few necessary setting options  
      var imgWidth = 208;
      var pageHeight = 208;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png');
      let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF  
      var position = 0;

      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
      // add extra page
      //  pdf.addPage(); 


      pdf.save('sample.pdf'); // Generated PDF   
    });
  }

  exportAsXLSX() {
    this.excelService.exportAsExcelFile(this.data, 'sample');
  }
}
