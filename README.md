# Criação de WebApi
## Requisitos:
- Pesquisar um endereço na api livre ViaCep (https://viacep.com.br) para um determinado cep, retornando todas as informações do respectivo cep.
- Cep somente números.
- O retorno deve ser JSON.
- Pode-se utilizar frameworks terceiras para comunicação.
- Aplique boas práticas de código e arquitetura.
- Faça um código limpo.
- Comentários são bem vindos.
- Disponibilize o código em um repositório GIT público (GitHub, Gitlab, AzureDevops, etc...)
- Tome seu tempo, utilize seu conhecimento, fique a vontade, e aprenda algo novo.
- Utilize nodejs.

## Cenários de retorno da API:
- Se cep formato válido, então retorna objeto com status 200:
```json
{
  "cep": "01001-000",
  "logradouro": "Praça da Sé",
  "complemento": "lado ímpar",
  "bairro": "Sé",
  "localidade": "São Paulo",
  "uf": "SP",
  "ibge": "3550308",
  "gia": "1004",
  "ddd": "11",
  "siafi": "7107"
}
```
- Se cep formato válido, mas inexistente, então retorna objeto com status 200:
```json
{
  "erro": true
}
```

- Se CEP no formato inválido, então retorna status code 400
