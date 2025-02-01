import {Component, OnInit, output} from '@angular/core';
import {Pessoa} from '../../../../models/pessoa';
import {PessoaService} from '../../../../services/pessoa.service';

@Component({
  selector: 'app-pessoa-list',
  imports: [],
  templateUrl: './pessoa-list.component.html',
  styleUrl: './pessoa-list.component.scss'
})
export class PessoaListComponent implements OnInit {
  pessoaRecords: Pessoa[] = [];
  pessoaEdited = output<Pessoa>();

  constructor(private pessoaService: PessoaService) {}

  ngOnInit(): void {
    this.loadPessoas();
  }

  loadPessoas = (): void => {
    this.pessoaService.getAllPessoas().subscribe({
      next: (data) => {
        console.log("Successfully fetched data")
        this.pessoaRecords = data;
      },
      error: (error) => {
        console.error("API error: ", error);
      }
    });
  }

  editPessoa(pessoaRecord: Pessoa): void {
    this.pessoaEdited.emit(pessoaRecord);
  }

  removePessoa = (pessoaRecord: Pessoa): void => {
    this.pessoaService.deletePessoa(pessoaRecord.idPessoa).subscribe({
      next: () => {
        console.log("Successfully deleted data")
        this.pessoaRecords.splice(this.pessoaRecords.indexOf(pessoaRecord), 1);
      },
      error: (error) => {
        console.error("API error: ", error);
      }
    })
  }
}
