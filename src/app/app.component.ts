import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-unit-test';

  content = "This is a content!"
  hide = true;

  toggle(){
    this.hide = !this.hide;
  }
}
