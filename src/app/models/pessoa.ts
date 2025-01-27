export interface Pessoa {
    idPessoa: number,
    nome: string,
    cpf: string,
    nascimento: Date,
    endereco: Endereco
}

interface Endereco {
    cep: number,
    rua: string,
    numero: number,
    cidade: string,
    estado: string
}
