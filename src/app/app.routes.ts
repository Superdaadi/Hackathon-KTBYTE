import { Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TrackerComponent } from './tracker/tracker.component';
import { CO2Component } from './co2/co2.component';

export const routes: Routes = [
    {path: '', component: HomepageComponent},
    {path:'navbar', component: NavbarComponent},
    {path:'tracker', component: TrackerComponent},
    {path: 'co2', component: CO2Component}
];



