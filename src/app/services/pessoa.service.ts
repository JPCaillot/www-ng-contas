import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pessoa } from '../models/pessoa';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {
  private apiUrl: string = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  savePessoa(pessoa: Omit<Pessoa, 'idPessoa'>): Observable<Pessoa> {
    const url = `${this.apiUrl}/pessoa`;
    return this.http.post<Pessoa>(url, pessoa)
  }

  getAllPessoas(): Observable<Pessoa[]> {
    const url = `${this.apiUrl}/pessoa`;
    return this.http.get<Pessoa[]>(url);
  }
}
