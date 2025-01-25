import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-pessoa-form',
  imports: [ReactiveFormsModule],
  templateUrl: './pessoa-form.component.html',
  styleUrl: './pessoa-form.component.scss'
})
export class PessoaFormComponent {
  private formBuilder = inject(FormBuilder);
  form = this.formBuilder.group({
    pessoaInfo: this.formBuilder.group({
      name: [''],
      cpf: [''],
      birthDate: [''],
    }),
    addressInfo: this.formBuilder.group({
      postalCode: [''],
      street: [''],
      number: [''],
      city: [''],
      state: ['']
    })
  });

  onSubmit() {
    console.warn(this.form.value);
  }


}
