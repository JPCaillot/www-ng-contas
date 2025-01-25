import { Component } from '@angular/core';
import { PessoaFormComponent } from '../pessoa-page/components/pessoa-form/pessoa-form.component';
import { PessoaListComponent } from './components/pessoa-list/pessoa-list.component';

@Component({
  selector: 'app-pessoa-page',
  imports: [ PessoaFormComponent, PessoaListComponent ],
  templateUrl: './pessoa-page.component.html',
  styleUrl: './pessoa-page.component.scss'
})
export class PessoaPageComponent {

}
