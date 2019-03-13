import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-upload-tools',
  templateUrl: './upload-tools.component.html',
  styleUrls: ['./upload-tools.component.scss']
})
export class UploadToolsComponent implements OnInit {
  allFiles: any = [];
  images: any = [];
  selectedFile: File = null
  fileList = []
  hasFile = false;
  lengthFiles

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.uploadBtnTemplate()
  }

  onFileSelected(event) {
    const files = event.target.files;
    this.lengthFiles = event.target.files.length

    if (files) {
      for (let i = 0; i < files.length; i++) {
        const image = {
          name: '',
          type: '',
          size: ''
        };
        this.allFiles.push(files[i]);
        image.name = files[i].name;
        image.size = files[i].size;
        image.type = files[i].type;
        const reader = new FileReader();
        reader.onload = (filedate) => {
          this.images.push(image)
        };
        reader.readAsDataURL(files[i]);
      }
    }
    event.srcElement.value = null
  }

  deletFile(file) {
    const index = this.images.indexOf(file)
    this.images.splice(index, 1)
    this.allFiles.splice(index, 1)
  }

  clean() {
    this.images.length = 0
    this.allFiles.length = 0
  }

  uploadBtnTemplate() {
    let baseUri = 'http://facilitadorproduto.azurewebsites.net/api/files'
    const fd = new FormData();
    
    for (let i = 0; i < this.lengthFiles; i++) {
      fd.append('files', this.allFiles[i], this.allFiles[i].name)
      if (i+1 == this.lengthFiles) {
        this.http.post(baseUri, fd, { observe: 'response' })
          .subscribe(resp => {
            console.log(resp.status)
          })
      }
    }
  }

}
