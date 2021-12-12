import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SlidersComponent } from './sliders/sliders.component';
import { CardsComponent } from './cards/cards.component';
import { PickedFoodComponent } from './picked-food/picked-food.component';
import { CardModule } from 'primeng/card';

import {ButtonModule} from 'primeng/button';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SlidersComponent,
    CardsComponent,
    PickedFoodComponent,
    FooterComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, CardModule, ButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
