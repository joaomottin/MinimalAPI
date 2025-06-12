# 🍽 Sistema de Cardápio Digital

## 🔗 Backend em Minimal API (.NET 7) + Frontend em React

---

## 📌 Descrição do Projeto

Este é um sistema completo de cardápio digital, composto por:

* 🖥 *Back-end:* API RESTful desenvolvida com *.NET 7 Minimal API, utilizando **Entity Framework Core* e banco de dados *SQLite, com testes facilitados via **Swagger*.
* 💻 *Front-end:* Criado com *React*, proporcionando uma interface moderna, amigável e responsiva.
* 📂 *Versionamento:* Controle de código com *Git + GitHub*, garantindo histórico e colaboração eficiente.

### Funcionalidades disponíveis:

* Gerenciamento completo de:

  * 🍽 Restaurantes (GET/GET{ID})
  * 🥘 Pratos (CRUD)

---

## ✅ Tecnologias Utilizadas

### 🔧 Back-end

* C#
* .NET 7 (Minimal API)
* Entity Framework Core
* SQLite
* Swagger

### 🎨 Front-end

* React
* CSS / TypeScript
* npm (Node Package Manager)

### 🔁 Controle de Versão

* Git
* GitHub

---

## 🚀 Como Executar o Projeto Completo

### 1. Clonar o Repositório e Abrir no VS Code

bash
git clone https://github.com/joaomottin/MinimalAPI.git
cd MinimalAPI
code .


---

### 2. Executar o Back-end (API)

Abra o terminal (atalho: Win + \' ) e execute os comandos abaixo:

bash
cd .\Positivo\MinimalAPI\
code .
dotnet restore
dotnet run


Acesse o Swagger da API em: [http://localhost:5163/swagger/index.html](http://localhost:5163/swagger/index.html)

---

### 3. Executar o Front-end (React)

No terminal:

bash
cd ../frontend
code .
npm install
npm start


O front-end será aberto em: [http://localhost:3000](http://localhost:3000)

> Se não abrir automaticamente, acesse o link manualmente pelo navegador.

---

### 4. Testar a API

Você pode testar a API de duas formas:

* Usando a interface Swagger
* Utilizando o arquivo requests.http na pasta /Testes

Para testar os métodos *POST* e *PUT* no Swagger, utilize o seguinte modelo:  


{
  "nome": "Teste",
  "descricao": "Teste",
  "preco": 1,
  "restauranteId": 1
}  


Com o front-end funcionando, você poderá interagir diretamente com todas as funcionalidades da aplicação através da interface web.

---

✅ Pronto! Seu sistema de cardápio digital está ativo e funcionando. Em caso de dúvidas, consulte a documentação ou peça ajuda ao ChatGPT. 🚀
