import { SlidersComponent } from './sliders/sliders.component';
import { PickedFoodComponent } from './picked-food/picked-food.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './cards/cards.component';

const routes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'pickedFood', component: PickedFoodComponent },
  { path: 'sliders', component: SlidersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
