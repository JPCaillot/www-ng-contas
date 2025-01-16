import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-pessoa-form',
  imports: [ReactiveFormsModule],
  templateUrl: './pessoa-form.component.html',
  styleUrl: './pessoa-form.component.scss'
})
export class PessoaFormComponent {
  form = new FormGroup({
    pessoaInfo: new FormGroup({
      name: new FormControl(''),
      cpf: new FormControl(''),
      birthDate: new FormControl('')
    }),
    addressInfo: new FormGroup({
      cep: new FormControl(''),
      street: new FormControl(''),
      number: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
    })
  });

  
}
