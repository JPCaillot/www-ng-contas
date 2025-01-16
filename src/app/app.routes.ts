import { Routes } from '@angular/router';
import { LandingPageComponent } from '../pages/landing-page/landing-page.component';
import { PessoaPageComponent } from '../pages/pessoa-page/pessoa-page.component';

export const routes: Routes = [
    { path: 'home', component: LandingPageComponent },
    { path: 'pessoas', component: PessoaPageComponent },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
