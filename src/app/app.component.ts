import { Component, OnInit } from '@angular/core';

declare var require: any
const FileSaver = require('file-saver');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'johanhamidi';
  isCollapsed = true;

  ngOnInit() {
    document.body.classList.add('bg-img');
  }

  downloadPdf() {
    const pdfUrl = './assets/Curriculum-vitæ.pdf';
    const pdfName = 'cv.pdf';
    FileSaver.saveAs(pdfUrl, pdfName);
  }
}
