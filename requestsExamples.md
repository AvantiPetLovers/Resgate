# Exemplos de requisições


## Requisições PET

### Listar todos os pets
1. No endereço `http://localhost:3001/pet`, crie uma requisição GET.
2. Faça a requisição.

### Encontrar pet por ID
1. No endereço `http://localhost:3001/pet/:id`, crie uma requisição GET.
2. No campo `id` da seção Params coloque um id de um pet já cadastrado.
3. Faça a requisição.

### Cadastrar novo pet
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
3. Faça a requisição.

### Atualizar pet por ID
1. No endereço `http://localhost:3001/pet/:id`, crie uma requisição PUT.
2. No campo `id` da seção Params coloque um id de um pet já cadastrado.
3. Na seção Body coloque os dados do pet que deseja atualizar. Exemplo mudando o tamanho:
   ```json
    {
        "size": "MEDIUM"
    }
   ```
4. Faça a requisição.

### Deletar pet por ID
1. No endereço `http://localhost:3001/pet/:id`, crie uma requisição DELETE.
2. No campo `id` da seção Params coloque um id de um pet já cadastrado.
3. Faça a requisição.



## Requisições ADOTANTE

### Listar todos os adotantes
1. No endereço `http://localhost:3001/adopter`, crie uma requisição GET.
2. Faça a requisição.

### Encontrar adotante por ID
1. No endereço `http://localhost:3001/adopter/:id`, crie uma requisição GET.
2. No campo `id` da seção Params coloque um id de um adotante já cadastrado.
3. Faça a requisição.

### Cadastrar novo adotante
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

### Atualizar adotante por ID
1. No endereço `http://localhost:3001/adopter/:id`, crie uma requisição PUT.
2. No campo `id` da seção Params coloque um id de um adotante já cadastrado.
3. Na seção Body coloque os dados do adotante que deseja atualizar. Exemplo mudando o telefone:
   ```json
    {
        "phone": "64 98888-8888"
    }
   ```
4. Faça a requisição.

### Deletar adotante por ID
1. No endereço `http://localhost:3001/adopter/:id`, crie uma requisição DELETE.
2. No campo `id` da seção Params coloque um id de um adotante já cadastrado.
3. Faça a requisição.   