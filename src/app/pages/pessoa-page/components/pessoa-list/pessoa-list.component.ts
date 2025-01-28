import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../../../../models/pessoa';
import { PessoaService } from '../../../../services/pessoa.service';

@Component({
  selector: 'app-pessoa-list',
  imports: [],
  templateUrl: './pessoa-list.component.html',
  styleUrl: './pessoa-list.component.scss'
})
export class PessoaListComponent implements OnInit {
  pessoaRecords: Pessoa[] = [];

  constructor(private pessoaService: PessoaService) {}

  ngOnInit(): void {
    this.loadPessoas();
  }

  loadPessoas = (): void => {
    this.pessoaService.getAllPessoas().subscribe({
      next: (data) => {
        this.pessoaRecords = data;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
}
