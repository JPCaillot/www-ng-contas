export interface PessoaFormValue {
  pessoaInfo: {
    name: string;
    cpf: string;
    birthDate: string;
  };
  addressInfo: {
    postalCode: string;
    street: string;
    number: string;
    city: string;
    state: string;
  };
}
