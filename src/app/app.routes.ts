import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ChartComponent } from './chart/chart.component';

export const routes: Routes = [
    {path: '', component: HomepageComponent},
    {path:'navbar', component: NavbarComponent},
    {path:'chart', component: ChartComponent},

];
