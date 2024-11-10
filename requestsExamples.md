# Exemplos de requisições

## Requisições de LOGIN

<details><summary>Fazer login como ADMIN</summary>


1. No endereço `http://localhost:3001/login`, crie uma requisição POST.
2. Na secão Body coloque os dados de login do ADMIN abaixo ou de qualquer outro admin cadastrado:
    ```json
    {
    "email": "admin@admin.com",
    "password": "admin123"
    }
   ```
3. Faça a requisição.
</details>


<details><summary>Fazer login como ADOTANTE</summary>

1. No endereço `http://localhost:3001/login`, crie uma requisição POST.
2. Na secão Body coloque os dados de login de um ADOTANTE cadastrado, como no exemplo abaixo:
    ```json
   {
    "email": "<EMAIL_DO_ADOTANTE_CADASTRADO>",
    "password": "SENHA_DO_ADOTANTE_CADASTRADO"
    }
   ```
3. Faça a requisição.
</details>



## Requisições PET

<details><summary>Listar todos os pets</summary>

1. No endereço `http://localhost:3001/pet`, crie uma requisição GET.
2. Faça a requisição.
</details>

<details><summary>Encontrar pet por ID</summary>

1. No endereço `http://localhost:3001/pet/:id`, crie uma requisição GET.
2. No campo `id` da seção Params coloque um id de um pet já cadastrado.
3. Faça a requisição.
</details>

<details><summary>Cadastrar novo pet</summary>

1. No endereço `http://localhost:3001/pet`, crie uma requisição POST.
2. Na seção Body coloque os dados do pet que deseja cadastrar. Exemplo abaixo com o randomizador do Insomnia:
   ```json
   {
    "name": "{% faker 'randomFirstName' %}",
    "species": "SNAKE",
    "birth_date": "{% faker 'randomDatePast' %}",
    "description": "{% faker 'randomLoremSentence' %}",
    "size": "LARGE",
    "personality": "CALM"
   }
   ```
3. Na seção Auth, selecione o Bearer Token e coloque o token do ADMIN.
   ```
   Obs.: O insomnia já veio programado para usar o ultimo tonken gerado pela requisição de login do ADMIN.
   ```
4. Faça a requisição.
</details>

<details><summary>Atualizar pet por ID</summary>

1. No endereço `http://localhost:3001/pet/:id`, crie uma requisição PUT.
2. No campo `id` da seção Params coloque um id de um pet já cadastrado.
3. Na seção Body coloque os dados do pet que deseja atualizar. Exemplo mudando o tamanho:
   ```json
    {
    "size": "MEDIUM"
    }
   ```
4. Na seção Auth, selecione o Bearer Token e coloque o token do ADMIN.
   ```
   Obs.: O insomnia já veio programado para usar o ultimo tonken gerado pela requisição de login do ADMIN.
   ```
5. Faça a requisição.
</details>

<details><summary>Deletar pet por ID</summary>

1. No endereço `http://localhost:3001/pet/:id`, crie uma requisição DELETE.
2. No campo `id` da seção Params coloque um id de um pet já cadastrado.
3. Na seção Auth, selecione o Bearer Token e coloque o token do ADMIN.
   ```
   Obs.: O insomnia já veio programado para usar o ultimo tonken gerado pela requisição de login do ADMIN.
   ```
4. Faça a requisição.
</details>



## Requisições ADOTANTE

<details><summary>Listar todos os adotantes</summary>

1. No endereço `http://localhost:3001/adopter`, crie uma requisição GET.
2. Na seção Auth, selecione o Bearer Token e coloque o token do ADMIN.
   ```
   Obs.: O insomnia já veio programado para usar o ultimo tonken gerado pela requisição de login do ADMIN.
   ```
3. Faça a requisição.

</details>

<details><summary>Encontrar adotante por ID</summary>

1. No endereço `http://localhost:3001/adopter/:id`, crie uma requisição GET.
2. No campo `id` da seção Params coloque um id de um adotante já cadastrado.
3. Na seção Auth, selecione o Bearer Token e coloque o token do ADMIN.
   ```
   Obs.: O insomnia já veio programado para usar o ultimo tonken gerado pela requisição de login do ADMIN.
   ```
4. Faça a requisição.
</details>

<details><summary>Cadastrar novo adotante</summary>

1. No endereço `http://localhost:3001/adopter`, crie uma requisição POST.
2. Na seção Body coloque os dados do adotante que deseja cadastrar. Exemplo abaixo com o randomizador do Insomnia:
   ```json
   {
    "name": "{% faker 'randomFullName' %}",
    "email": "{% faker 'randomEmail' %}",
    "password": "{% faker 'randomPassword' %}",
    "phone": "64 99999-9999",
    "adress": {
        "street": "{% faker 'randomStreetName' %}",
        "number": "123",
        "neighborhood": "{% faker 'randomStreetName' %}",
        "city": "{% faker 'randomCity' %}"
        }
    }
   ```
3. Faça a requisição.
</details>

<details><summary>Atualizar adotante por ID</summary>

1. No endereço `http://localhost:3001/adopter/:id`, crie uma requisição PUT.
2. No campo `id` da seção Params coloque um id de um adotante já cadastrado.
3. Na seção Body coloque os dados do adotante que deseja atualizar. Exemplo mudando o nome da rua:
   ```json
    {
    "adress": {
        "street": "Nova rua"
        }
    }
   ```
4. Na seção Auth, selecione o Bearer Token e coloque o token do ADMIN.
   ```
   Obs.: O insomnia já veio programado para usar o ultimo tonken gerado pela requisição de login do ADMIN.
   ```
5. Faça a requisição.
</details>

<details><summary>Deletar adotante por ID</summary>

1. No endereço `http://localhost:3001/adopter/:id`, crie uma requisição DELETE.
2. No campo `id` da seção Params coloque um id de um adotante já cadastrado.
3. Na seção Auth, selecione o Bearer Token e coloque o token do ADMIN.
   ```
   Obs.: O insomnia já veio programado para usar o ultimo tonken gerado pela requisição de login do ADMIN.
   ```
4. Faça a requisição.
</details>



## Requisições ADOÇÃO

<details><summary>Listar todas as adoções</summary>

1. No endereço `http://localhost:3001/adoption`, crie uma requisição GET.
2. Na seção Auth, selecione o Bearer Token e coloque o token do ADMIN.
   ```
   Obs.: O insomnia já veio programado para usar o ultimo tonken gerado pela requisição de login do ADMIN.
   ```
3. Faça a requisição.
</details>

<details><summary>Encontrar adoção por ID</summary>

1. No endereço `http://localhost:3001/adoption/:id`, crie uma requisição GET.
2. No campo `id` da seção Params coloque um id de um pet já cadastrado.
3. Na seção Auth, selecione o Bearer Token e coloque o token do ADMIN.
   ```
   Obs.: O insomnia já veio programado para usar o ultimo tonken gerado pela requisição de login do ADMIN.
   ```
4. Faça a requisição.
</details>

<details><summary>Cadastrar nova adoção</summary>

1. No endereço `http://localhost:3001/adoption`, crie uma requisição POST.
2. Na seção Body coloque os dados da adoção que deseja cadastrar, como no exemplo abaixo:
   ```json
   {
    "pet_id": "<ID_PET_CADASTRADO>",
    "adopter_id": "<ID_ADOTANTE_CADASTRADO>"
   }
   ```
3. Na seção Auth, selecione o Bearer Token e coloque o token do ADMIN.
   ```
   Obs.: O insomnia já veio programado para usar o ultimo tonken gerado pela requisição de login do ADMIN.
   ```
4. Faça a requisição.
</details>
