import { Component, OnInit } from '@angular/core';
import {ImageService} from '../image.service';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {

  constructor(private service: ImageService) { }
  images;

  ngOnInit(): void {
        this.service.getImages().subscribe(res => {
        this.images = res;
    });
  }

}
