import {Component, effect, inject, input, InputSignal} from '@angular/core';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';
import {PessoaService} from '../../../../services/pessoa.service';
import {Pessoa} from '../../../../models/pessoa';
import {addIdToPessoa, mapFormToPessoa, mapPessoaToForm} from '../../../../mappers/pessoa-mapper';

@Component({
  selector: 'app-pessoa-form',
  imports: [ReactiveFormsModule],
  templateUrl: './pessoa-form.component.html',
  styleUrl: './pessoa-form.component.scss'
})
export class PessoaFormComponent {
  pessoaBeingEdited: InputSignal<Pessoa | undefined> = input<Pessoa>();
  idPessoa: number | undefined;
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
