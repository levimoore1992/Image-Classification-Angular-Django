import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ImageFrontend';
  files: any;

  onSelect($event: NgxDropzoneChangeEvent) {
    
  }

  onRemove(f: any) {
    
  }
}
