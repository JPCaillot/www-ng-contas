import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { PessoaPageComponent } from '../app/pages/pessoa-page/pessoa-page.component';

export const routes: Routes = [
    { path: 'home', loadComponent: () => {
        return import('./pages/landing-page/landing-page.component')
        .then((module) => module.LandingPageComponent)
    } },
    { path: 'pessoas', component: PessoaPageComponent },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
