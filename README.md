# Validação e consulta de CEP integrado ao Webservice do ViaCEP
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

## Executar localmente:
- Criar o arquivo `.env` com base no arquivo `.env.sample`
- Instalar as dependências do projeto `npm install`
- Executar a aplicação `npm run dev`
- Será servido estaticamente a documentação do projeto, através do recurso `{host:port}/documentation`

## Ambiente de produção:
- Documentação disponível em `https://arcane-taiga-41534.herokuapp.com/documentation`
- Consultar CEP disponível em `https://arcane-taiga-41534.herokuapp.com/:cep/address`
