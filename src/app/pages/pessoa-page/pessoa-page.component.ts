import { Component } from '@angular/core';
import { PessoaFormComponent } from './components/pessoa-form/pessoa-form.component';
import { PessoaListComponent } from './components/pessoa-list/pessoa-list.component';
import {Pessoa} from '../../models/pessoa';

@Component({
  selector: 'app-pessoa-page',
  imports: [ PessoaFormComponent, PessoaListComponent ],
  templateUrl: './pessoa-page.component.html',
  styleUrl: './pessoa-page.component.scss'
})
export class PessoaPageComponent {
  pessoaEdited: Pessoa | undefined = undefined;

  onPessoaEdited(pessoa: Pessoa) {
    console.log("Pessoa arrived on pessoa-page", pessoa);
    this.pessoaEdited = pessoa;
  }
}
