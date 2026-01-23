# FrontEnd Pet Shop

### Módulos do Sistema de Pet Shop

### Login

* #### O login/logout e feito pela ferramenta Keycloak

### Cadastro

* #### Clientes: Nome, CPF, RG, data de nascimento, sexo, estado civil, telefone, email, endereço.
* #### Funcionário: Nome, CPF, RG, data de nascimento, sexo, estado civil, telefone, email, endereço, cargo, salario, bônus.
* #### Pets: Nome, espécie, raça, idade, peso, dono.

### Tecnologias Utilizadas 

* #### Nesse projeto foi utilizado React + Vite, Fetch API, InputMask e DaisyUI
* #### Esse projeto utiliza a API BackEnd pet-shop-api

### Instruções de Execução Local

Para utilizar o InputMask, precisa instalar a lib:

npm install @react-input/mask

Para executar a aplicação utilizar o comando:

npm run build

npm run dev

### Instruções de Execução no Docker

Para executar o projeto no Docker execute o comando:

docker compose up -d

Para criar uma nova imagem:

docker build -t pet-shop-frontend:latest .

docker build -t pet-shop-backend:latest .
