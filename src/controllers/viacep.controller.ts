import axios from 'axios';

export class Viacep {
    request: any;
    constructor(request = axios) {
        this.request = request;
    }

    async searchAddress(cep: string) {
        let response;
        try {
            //TODO: add viacep url in .env
            const { data } = await this.request.get(`https://viacep.com.br/ws/${cep}/json/`);
            if (data.erro) {
                response = { message: `O CEP ${cep} não possui endereço vinculado.` }
            } else {
                response = data;
            }
        } catch (error) {
            const { status } = error.response;
            if (status == 400) {
                response = { message: `O CEP ${cep} está com formato inválido.`, details: `O CEP deve possuir 8 dígitos sem caracteres especiais e/ou espaço.` };
            } else {
                response = { message: `Erro desconhecido.` };
            }
        }
        return response;
    }
}