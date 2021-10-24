import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { saveAs } from 'file-saver';
import * as JSZip from 'jszip'
import * as JSZipUtils from 'jszip-utils'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  urls = [
    'http://localhost:3000/EL1TlZ925038984s.jpg',
    'http://localhost:3000/klNtVBUntitled 1.odt'];
  nombre = 'Your_zip';
  constructor(private http: HttpClient) { }

  ngOnInit() {
      
  }

  downloadFile() {
    this.compressed_img(this.urls, this.nombre);
  }


  compressed_img(urls,nombre) {
    var zip = new JSZip();
    var count = 0;
    var name = nombre+".zip";
    urls.forEach(function(url){
      JSZipUtils.getBinaryContent(url, function (err, data) {
        if(err) {
           throw err; 
        }
         zip.file(url, data,  {binary:true});
         count++;
         if (count == urls.length) {
           zip.generateAsync({type:'blob'}).then(function(content) {
              saveAs(content, name);
           });
         }
        });
    });
  }

}
