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


**Executando o Projeto Node:**

1. Baixe e instale a versão LTS do [NodeJS](https://nodejs.org/en/download/).

2. Para instalar as dependências do projeto, execute o comando na pasta raiz do projeto:
   ```bash
   npm install  
   ```

3. Para rodar o projeto localmente:
   ```bash
   npm start
   ```


**Desenvolvendo o banco de dados**

1. Faca uma copia do arquivo `.env.exemple` e renomeie `.env`.
   
2. Configure a variável `DATABASE_URL` com a string de conexão do banco de dados.
   
3. Faça suas alterações no banco de dados.
   
4. Faça um push das suas alterações para o banco de dados:
   ```bash
   npx prisma push
   ```

5. Gere o cliente Prisma para interagir com o banco de dados:
   ```bash
   npx prisma generate
   ```