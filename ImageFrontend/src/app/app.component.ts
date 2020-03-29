import { Component } from '@angular/core';
import {NgxDropzoneChangeEvent} from 'ngx-dropzone';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ImageFrontend';
  files: File[] = [];
  isDragActive = false;
  isLoading = false;

  onSelect(event) {
  console.log(event);
  this.isLoading = true;
  this.files.push(...event.addedFiles);
  setTimeout(() => {
      this.isLoading = false;
  }, 1000);
}

onRemove(event) {
  console.log(event);
  this.files.splice(this.files.indexOf(event), 1);
}

  dragActive() {
    this.isDragActive = true;
  }
}
