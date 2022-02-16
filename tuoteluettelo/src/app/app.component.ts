import { Component, Input } from '@angular/core';

import { PhoneListComponent } from './phone-list/phone-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Phone List';
  @Input()searchList! : PhoneListComponent;

  constructor () {}

  ngOnInit(): void {


  }

}
