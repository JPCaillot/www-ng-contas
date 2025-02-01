import { FormGroup } from "@angular/forms";
import { Pessoa } from "../models/pessoa";
import {PessoaFormValue} from '../models/PessoaFormValue';

export const mapFormToPessoa = (form: FormGroup): Omit<Pessoa, 'idPessoa'> => {
    const pessoaInfo = form.value.pessoaInfo as PessoaFormValue['pessoaInfo'];
    const addressInfo = form.value.addressInfo as PessoaFormValue['addressInfo'];

    return {
        nome: pessoaInfo?.name || '',
        cpf: pessoaInfo?.cpf || '',
        nascimento: pessoaInfo?.birthDate ? new Date(pessoaInfo.birthDate) : new Date(),
        endereco: {
            cep: parseInt(addressInfo?.postalCode || '0', 10),
            rua: addressInfo?.street || '',
            numero: parseInt(addressInfo?.number || '0', 10),
            cidade: addressInfo?.city || '',
            estado: addressInfo?.state || ''
        }
    }
}

export const addIdToPessoa = (pessoa: Omit<Pessoa, "idPessoa">, id: number): Pessoa => {
  return {
    ...pessoa,
    idPessoa: id
  }
}

export const mapPessoaToForm = (pessoa: Pessoa): PessoaFormValue => {
  const endereco = pessoa.endereco;
  return {
    pessoaInfo: {
      name: pessoa.nome,
      cpf: pessoa.cpf,
      birthDate: pessoa.nascimento.toString()
    },
    addressInfo: {
      postalCode: endereco.cep.toString(),
      street: endereco.rua,
      number: endereco.numero.toString(),
      city: endereco.cidade,
      state: endereco.estado
    }
  }
}
