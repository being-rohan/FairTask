import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FairDashboardComponent } from './component/fair-dashboard/fair-dashboard.component';
import { FairCardComponent } from './component/fair-card/fair-card.component';
import { FairDetailsComponent } from './component/fair-details/fair-details.component';
import { NavbarComponent } from './component/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    FairDashboardComponent,
    FairCardComponent,
    FairDetailsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
