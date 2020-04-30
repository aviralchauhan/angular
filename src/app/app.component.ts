import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  open = false;
  openRegister(event){
  console.log("display",event);
  this.open = true;

  }
  closeRegister(event){
  console.log("display",event);
  this.open = false;

  }
}
