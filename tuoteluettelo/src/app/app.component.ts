import { Component } from '@angular/core';
import phones from "../assets/phones/phones.json";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  phoneData: any;

  constructor() {
    this.phoneData = phones;
  }

  ngOnInit() {}
}
