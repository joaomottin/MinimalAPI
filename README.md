# 🍽 Sistema de Cardápio Digital

## 🔗 Backend em Minimal API (.NET 7) + Frontend em React

---

## 📌 Descrição do Projeto

Este é um sistema completo de cardápio digital, composto por:

* 🖥 *Back-end:* API RESTful feita com *.NET 7 Minimal API, persistência com **Entity Framework Core* e *SQLite, testável via **Swagger*.
* 💻 *Front-end:* Desenvolvido em *React*, com interface responsiva e moderna.
* 📂 *Versionamento:* Gerenciado com *Git + GitHub*, permitindo colaboração e rastreamento de mudanças.

Funcionalidades da API:

* Cadastro, listagem, edição e remoção de:

  * 🍽 Restaurantes
  * 🥘 Pratos
  * 🗂 Categorias
  * 🧂 Ingredientes

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
* CSS/TypeScript
* npm (Node Package Manager)

### 🔁 Controle de Versão

* Git
* GitHub

---

## 🚀 Passo a Passo para Executar o Projeto Completo

### 1. Clonar o Repositório e Abrir no VS Code

bash
git clone https://github.com/joaomottin/MinimalAPI.git
cd MinimalAPI
code .


---

### 2. Rodar o Back-end (API)

bash
# Abrir o terminal
Win + '

# Ir até a pasta do back-end
cd .\Positivo\MinimalAPI\
code .

# Restaurar e executar
Win + '
dotnet restore
dotnet run


Acesse o Swagger em: [http://localhost:5163/swagger/index.html](http://localhost:5163/swagger/index.html)

---

### 3. Rodar o Front-end (React)

bash
# Voltar ao projeto raiz
cd ..
cd .\frontend\
code .

# Instalar dependências e rodar
Win + '
npm install
npm start


Acesse o front-end em: [http://localhost:3000](http://localhost:3000)

> Caso não abra automaticamente, digite o endereço no navegador manualmente.

---

### 4. Testes com a API

Com o back-end rodando, você pode:

* Usar o *Swagger*
* Ou o arquivo requests.http na pasta /Testes para testar manualmente as rotas da API.

Para testar os métodos *POST* e *PUT* corretamente no Swagger, utilize a seguinte estrutura de JSON:

json
{
  "nome": "Teste",
  "descricao": "Teste",
  "preco": 1,
  "restauranteId": 1
}


Com o front-end rodando, é possível interagir com todas as funcionalidades diretamente pela interface web.

---

✅ Tudo pronto! O sistema de cardápio digital está funcionando. Se tiver dúvidas ou problemas, o ChatGPT pode te ajudar! 🚀
