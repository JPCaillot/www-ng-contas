import { FormGroup } from "@angular/forms";
import { Pessoa } from "../models/pessoa";

export const mapFormToPessoa = (form: FormGroup): Omit<Pessoa, 'idPessoa'> => {
    const pessoaInfo = form.get('pessoaInfo')?.value;
    const addressInfo = form.get('addressInfo')?.value;

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