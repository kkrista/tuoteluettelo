import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import phones from "../../assets/phones/phones.json";
import { Phone } from '../interfaces';
import { PhonesService } from "../phone.service";


@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.css']
})

export class PhoneListComponent implements OnInit {
  phoneData: any;

  @Input() searchList! : string;
  @Output() searchEvent = new EventEmitter<string>();
  phones!: Phone[];
  orderHeader: string = '';

  constructor(private phoneService: PhonesService) {
    this.phoneData = phones
  }

  sentEvent() {
    this.searchEvent.emit(this.searchList);
  }

  ngOnInit(): void {
    this.getPhones();
  }

  getPhones(): void {
    this.phoneService.getPhones()
      .subscribe(phones => {
      this.phones = phones;
    });
  }


  sort(event:any) {
    this.orderHeader = event.target.value; //name or id etc.
    console.log(this.orderHeader);


  }

}


