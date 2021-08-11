import axios from 'axios';

export class Viacep {
    request: any;
    constructor(request = axios) {
        this.request = request;
    }

    /**
     *
     * @api {get} /:cep/address Buscar endereço por CEP
     * @apiName searchAddress
     * @apiGroup Viacep
     * @apiVersion  1.0.0
     *
     * @apiParam  {String} cep CEP com 8 dígitos sem caracteres alfanuméricos, especiais
     *
     * @apiSuccessExample {json} Success-Response
     *  200 OK - CEP válido e existente
     *  {
     *      "cep": "01001-000",
     *      "logradouro": "Praça da Sé",
     *      "complemento": "lado ímpar",
     *      "bairro": "Sé",
     *      "localidade": "São Paulo",
     *      "uf": "SP",
     *      "ibge": "3550308",
     *      "gia": "1004",
     *      "ddd": "11",
     *      "siafi": "7107"
     *  }
     * 
     * @apiSuccessExample {json} Success-Response
     *  200 OK - CEP válido, mas inexistente
     *  { 
     *      "message": "O CEP :cep não possui endereço vinculado."
     *  }
     * 
     * @apiErrorExample Error-Response:
     *  400 Bad Request CEP com formato inválido
     *     {
     *       "message": "O CEP :cep está com formato inválido.",
     *       "details": "O CEP deve possuir 8 dígitos sem caracteres alfanuméricos, especiais e/ou espaço."
     *     }
     * 
     * @apiErrorExample Error-Response:
     *     Erros com status code não mapeados
     *     {
     *       "message": "Erro desconhecido."
     *     }
    */
    async searchAddress(cep: string) {
        let response, status;
        const invalidFormat = { message: `O CEP ${cep} está com formato inválido.`, details: `O CEP deve possuir 8 dígitos sem caracteres alfanuméricos, especiais e/ou espaço.` };
        try {
            if (!this.validateCep(cep)) {
                response = invalidFormat;
                status = 400;
            } else {
                //TODO: add viacep url in .env
                const { data, status: resStatus } = await this.request.get(`https://viacep.com.br/ws/${cep}/json/`);
                status = resStatus;
                if (data.erro) {
                    response = { message: `O CEP ${cep} não possui endereço vinculado.` }
                } else {
                    response = data;
                }
            }
        } catch (error) {
            const { status: resStatus } = error.response;
            status = resStatus;
            if (resStatus == 400) {
                response = invalidFormat;
            } else {
                response = { message: `Erro desconhecido.` };
            }
        }
        return { response, status };
    }

    validateCep(cep: string) {
        const cepPattern = /^[0-9]{8}$/;
        return cepPattern.test(cep);
    }
}
