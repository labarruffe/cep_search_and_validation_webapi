import axios from 'axios';

export class Viacep {
    request: any;
    constructor(request = axios) {
        this.request = request;
    }

    async searchAddress(cep: string) {
        let response;
        const invalidFormat = { message: `O CEP ${cep} está com formato inválido.`, details: `O CEP deve possuir 8 dígitos sem caracteres especiais e/ou espaço.` };
        try {
            if (!this.validateCep(cep)) {
                response = invalidFormat;
            } else {
                //TODO: add viacep url in .env
                const { data } = await this.request.get(`https://viacep.com.br/ws/${cep}/json/`);
                if (data.erro) {
                    response = { message: `O CEP ${cep} não possui endereço vinculado.` }
                } else {
                    response = data;
                }
            }
        } catch (error) {
            console.log(error);
            const { status } = error.response;
            if (status == 400) {
                response = invalidFormat;
            } else {
                response = { message: `Erro desconhecido.` };
            }
        }
        return response;
    }

    validateCep(cep: string) {
        const cepPattern = /^[0-9]{8}$/;
        return cepPattern.test(cep);
    }
}
