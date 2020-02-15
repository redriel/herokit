import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PartyItemManagerComponent } from './components/party-item-manager/party-item-manager.component';
import { HeroPageComponent } from './components/party-item-manager/hero-page/hero-page.component';
import { HeroTabComponent } from './components/party-item-manager/hero-tab/hero-tab.component';
import { SearchbarComponent } from './components/party-item-manager/searchbar/searchbar.component';
import { HeroAccordionComponent } from './components/party-item-manager/hero-accordion/hero-accordion.component';
import { ItemCardComponent } from './components/party-item-manager/item-card/item-card.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    PartyItemManagerComponent,
    HeroPageComponent,
    HeroTabComponent,
    SearchbarComponent,
    HeroAccordionComponent,
    ItemCardComponent,
    HomeComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
