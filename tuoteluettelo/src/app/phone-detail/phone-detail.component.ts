import { PhoneDetails } from './../details.interface';

import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhonesService } from '../../app/phone.service';
import { Phone } from "../interfaces"
import { Phones } from '../phone.datasource';



@Component({
  selector: 'app-phone-detail',
  templateUrl: './phone-detail.component.html',
  styleUrls: ['./phone-detail.component.css']
})
export class PhoneDetailComponent implements OnInit {



  phoneDetails!: any;
  searchList! : String;
  phoneId: any;

  chosenPhone: any;
  allReady: boolean = false;
  newImageString: string = '"assets/" + image;';

  constructor(
    private phoneService: PhonesService,
    private route: ActivatedRoute,

  ) { }

  ngOnInit(): void {
    this.getPhone();

  }

  getPhone(): void {
    this.phoneId = this.route.snapshot.params['id'];
    this.route.params.subscribe((params) => {
      this.phoneId = params['id'];

    });

    this.phoneService.getProduct(this.phoneId).subscribe(((data: any) => {
      this.chosenPhone = data;
      this.allReady = true;

      }));

  }
  imgSrc: string = '"assets/" + image;'
  changeImg(event: any) {
    this.newImageString = event.target.getAttribute('src');
    document.getElementById('view-img')?.setAttribute('src', this.newImageString);
  }


}
