import { Component } from '@angular/core';
import { PessoaFormComponent } from '../../components/pessoa-form/pessoa-form.component';

@Component({
  selector: 'app-pessoa-page',
  imports: [ PessoaFormComponent ],
  templateUrl: './pessoa-page.component.html',
  styleUrl: './pessoa-page.component.scss'
})
export class PessoaPageComponent {

}
