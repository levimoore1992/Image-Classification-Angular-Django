import {Component, OnInit} from '@angular/core';
import {ImageService} from './image.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ImageFrontend';
  files: File[] = [];
  isDragActive = false;
  isLoading = false;

  constructor(private service: ImageService) {}

  ngOnInit(): void {
    this.service.getImages().subscribe(res => {
      console.log(res);
    });
  }

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
