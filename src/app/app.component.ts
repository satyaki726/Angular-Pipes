import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public name = "Satyaki Saha";
  public message = "Welcome " + this.name;
  public person = {
    "firstName":"John",
    "lastName":"Doe"
  }

  public date = new Date();
}

