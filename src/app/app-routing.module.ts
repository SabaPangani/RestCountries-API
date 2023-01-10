import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './pages/details/details.component';
import { MainPageComponent } from './pages/main-page/main-page.component';

const routes: Routes = [
  {path:'',component:MainPageComponent},
  {path:'home',component:MainPageComponent},
  {path:'Details/:name',component:DetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
