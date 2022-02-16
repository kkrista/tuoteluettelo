import { Component, OnInit, ViewChild } from '@angular/core';
import { Phone } from '../interfaces';
import { PhoneListComponent } from '../phone-list/phone-list.component';
import { PhonesService } from '../phone.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  orderHeader: string = '';
  phones: Phone[] = [];
  searchList! : any;
  objectKeys = Object.keys;
  items = { keyOne: 'Newest', keyTwo: 'Alphabetical'};

  constructor(private phoneService: PhonesService) { }

  @ViewChild(PhoneListComponent, {static : true}) listComponent : PhoneListComponent | undefined;

  ngOnInit() {
    this.getPhones();
  }

  getPhones(): void {
    this.phoneService.getPhones()
          .subscribe((phones: Phone[]) => this.phones = phones)
  }

  sortItem(event: any) {
    this.listComponent?.sort(event)
  }

}
