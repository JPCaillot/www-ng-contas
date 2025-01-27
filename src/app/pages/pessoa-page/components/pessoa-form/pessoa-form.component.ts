import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { PessoaService } from '../../../../services/pessoa.service';
import { Pessoa } from '../../../../models/pessoa';
import { mapFormToPessoa } from '../../../../mappers/pessoa-mapper';
import { response } from 'express';
import { error } from 'console';

@Component({
  selector: 'app-pessoa-form',
  imports: [ReactiveFormsModule],
  templateUrl: './pessoa-form.component.html',
  styleUrl: './pessoa-form.component.scss'
})
export class PessoaFormComponent {
  constructor(private service: PessoaService) {}

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
    const pessoa = mapFormToPessoa(this.form);
    this.service.savePessoa(pessoa).subscribe({
      next: (response) => console.log('Pessoa saved successfully: ', response),
      error: (error) => console.error('Error saving Pessoa: ', error)
    });
  }


}
