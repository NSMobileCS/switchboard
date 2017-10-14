import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Switchboard';
  makeBoxes = (n) => {
    let boxes = []
    for (let x=0;x<n;x++){
      if (Math.random() > 0.5){
        boxes.push(true);
      }
      else {
        boxes.push(false);
      }
    }
    return boxes;
  }
  boxes = this.makeBoxes(8);
  switchBox = (idx) => {
    if (this.boxes[idx]){
      this.boxes[idx] = false;
    }
    else {
      this.boxes[idx] = true;
    }
  }
}
