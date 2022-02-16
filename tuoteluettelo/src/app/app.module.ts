import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { PhoneDetailComponent } from './phone-detail/phone-detail.component';
import { AppRoutingModule } from './app-routing-module';
import { PhoneListComponent } from './phone-list/phone-list.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgPipesModule } from 'ngx-pipes';
import { PhoneFilterPipe } from './phone-list/phone-filter-pipe';
import { OrderModule } from 'ngx-order-pipe';
import { DashboardComponent } from './dashboard/dashboard.component';




@NgModule({
  declarations: [
    AppComponent,
    PhoneDetailComponent,
    PhoneListComponent,
    PhoneFilterPipe,
    DashboardComponent
  ],
  imports: [
    NgPipesModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    OrderModule,
    RouterModule.forRoot([
      { path: '', component: PhoneListComponent },
      { path: 'phones/:phoneId', component: PhoneDetailComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
