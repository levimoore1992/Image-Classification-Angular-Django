import { Component, OnInit } from '@angular/core';
import {ImageService} from '../image.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  files: File[] = [];
  isDragActive = false;
  isLoading = false;
  classifiedName: string;

  constructor(private service: ImageService) {}

  ngOnInit(): void {
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


  sendImage() {
    this.isLoading = true;
    const instance = new FormData();
    instance.append('picture', this.files[0], this.files[0].name);
    this.service.postImages(instance).subscribe(res => {
      // @ts-ignore
      this.classifiedName = res.classified;
      this.isLoading = false;
    });
  }

}
