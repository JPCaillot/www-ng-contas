import {Component, effect, inject, input, InputSignal} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {PessoaService} from '../../../../services/pessoa.service';
import {Pessoa} from '../../../../models/pessoa';
import {addIdToPessoa, mapFormToPessoa, mapPessoaToForm} from '../../../../mappers/pessoa-mapper';
import {NgxMaskDirective} from 'ngx-mask';

@Component({
  selector: 'app-pessoa-form',
  imports: [ReactiveFormsModule, NgxMaskDirective],
  templateUrl: './pessoa-form.component.html',
  styleUrl: './pessoa-form.component.scss'
})
export class PessoaFormComponent {
  pessoaBeingEdited: InputSignal<Pessoa | undefined> = input<Pessoa>();
  idPessoa: number | undefined;
  private formBuilder = inject(FormBuilder);
  form = this.formBuilder.group({
    pessoaInfo: this.formBuilder.group({
      name: ['', Validators.required],
      cpf: ['', Validators.required],
      birthDate: ['', Validators.required],
    }),
    addressInfo: this.formBuilder.group({
      postalCode: ['', Validators.required],
      street: ['', Validators.required],
      number: [''],
      city: ['', Validators.required],
      state: ['', Validators.required]
    })
  });

  constructor(private service: PessoaService) {
    effect(() => {
      const editingPessoa = this.pessoaBeingEdited();
      if (editingPessoa) {
        this.setFormToEditMode(editingPessoa);
      }
    });
  }

  setFormToEditMode = (editingPessoa: Pessoa): void => {
    this.idPessoa = editingPessoa.idPessoa;

    const formData = mapPessoaToForm(editingPessoa);
    console.log("Form data: ", formData);
    this.form.patchValue(formData);
  }

  onSubmit() {
    console.warn(this.form.value);
    if (!this.form.valid) {
      console.error("Form is not valid");
    } else {
      this.submitForm();
    }
  }

  private submitForm() {
    const pessoa = mapFormToPessoa(this.form);
    if (this.idPessoa) {
      this.editPessoa(pessoa);
    } else {
      this.savePessoa(pessoa);
    }
  }

  private editPessoa(pessoa: Omit<Pessoa, "idPessoa">) {
    console.log("Going to trigger API call to edit pessoa: ", pessoa);
    this.service.editPessoa(addIdToPessoa(pessoa, this.idPessoa!)).subscribe({
      next: (response) => {
        console.log('Pessoa edited successfully: ', response);
        // pessoa mostrada muda
        this.idPessoa = undefined;
      },
      error: (error) => console.error('Error editing Pessoa: ', error)
    });
  }

  private savePessoa(pessoa: Omit<Pessoa, "idPessoa">) {
    console.log("Going to trigger API call to create pessoa: ", pessoa);
    this.service.savePessoa(pessoa).subscribe({
      next: (response) => {
        console.log('Pessoa saved successfully: ', response);
        // carrega a lista novamente
      },
      error: (error) => console.error('Error saving Pessoa: ', error)
    });
  }
}
