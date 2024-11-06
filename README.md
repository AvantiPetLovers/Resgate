# Resgate 2.0

**Problema:** Sistema de Adoção de Pets

**Contexto:** Um abrigo de animais deseja modernizar seu processo de adoção. Atualmente, todas as informações dos pets e adotantes são controladas manualmente, o que resulta em atrasos e desorganização. Com uma aplicação web, o abrigo pretende agilizar o cadastro de pets disponíveis para adoção e facilitar a conexão com possíveis adotantes, tornando o processo mais eficiente e acessível.

**Objetivo:** Desenvolver uma aplicação web funcional que permita ao abrigo gerenciar seus pets e acompanhar o processo de adoção. A aplicação deve possibilitar o cadastro e visualização de pets, o registro de adotantes e a realização de adoções.

## Instruções para colaboradores

**Politica de branchs**

1. Antes de iniciar a codar, faça um pull na branch dev para garantir que você está na versão mais atual do codigo:
   ```bash
   git checkout dev
   git pull origin dev
   ```

2. Crie uma branch que descreva a funcionalidade que vai desenvolver, por exemplo, crud-pet:
   ```bash
   git checkout -b crud-pet
   ```

3. Faça o commit das suas alterações:
   ```bash
   git add .
   git commit -m "feat: Cadastro novo pet"
   ```

4. Faça um push das suas alterações para a branch que criou:
   ```bash
   git push origin crud-pet
   ```

5. Quando todas as alterações referentes a sua branch forem implementadas, vá ao GitHub e abra um pull request para a branch dev.


**Instalação e Execução do Projeto:**

1. Baixe e instale o [NodeJS](https://nodejs.org/).

2. Baixe e instale o [PostgreSQL](https://www.postgresql.org/).

3. Para instalar as dependências, execute o comando na pasta raiz do projeto:
   ```bash
   npm install  
   ```
4. Faca uma copia do arquivo `.env.example` e renomeie como `.env`:
   ```bash
   copy .env.example .env
   ```

5. No arquivo `.env` configure a variável `DATABASE_URL` com a `SEU_USUARIO` e `SUA_SENHA` usados ao instalar o PostgreSQL.

6. Gere uma nova base de dados com:
   ```bash
   npx prisma db push
   ```

7. Para rodar o projeto localmente:
   ```bash
   npm start
   ```

8. Agora é possivel fazer requisições HTTP em http://localhost:3001


**Testar requisições:**
1. Instale o [Insomnia](https://insomnia.rest/download)

2. Clique no botão abaixo.

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=Resgate2&uri=https%3A%2F%2Fraw.githubusercontent.com%2FAvantiPetLovers%2FResgate%2Frefs%2Fheads%2Fmain%2FInsomniaExport.json)


3. Para mais detalhes veja as rotas e exemplos de requisições em [Requisições](requestsExamples.md)
