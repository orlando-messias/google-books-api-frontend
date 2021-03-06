## Google Books API Frontend

### :information_source: Sobre
Após login na aplicação, o usuário é redirecionado à home page, podendo pesquisar por livros disponíveis na API Google Books e interagir com os mesmos adicionando e criando a relação de seus **livros favoritos**.

A Google Books API está disponível em https://developers.google.com/books/

Primeiro acesso? 
> pode utilizar as credenciais email: ***user@user.com*** e password: ***asd123***

> ou criar seu próprio usuário pelo link ***"I don't have an account yet"*** da página de login.


##### :camera: Screenshot
<p align="center"><img src="/src/assets/01.jpg"></p>


##### :camera: Screenshot
<p align="center"><img src="/src/assets/002.jpg"></p>


##### :camera: Screenshot
Ao localizar e clicar sobre um Card de Livro é exibido um **Modal** com as descrições do Livro e o usuário pode favoritá-lo ou desfavoritá-lo;
<p align="center"><img src="/src/assets/03.jpg"></p>


##### :camera: Screenshot
Após favoritar, o usuário pode acessar o link ***Favorites*** para exibir os livros favoritados na página de **Favoritos** .
<p align="center"><img src="/src/assets/04.jpg"></p>


##### :camera: Screenshot
Ao final da página estão disponíveis botões para paginação.
<p align="center"><img src="/src/assets/05.jpg"></p>


Características:
- Utiliza Redux para gerenciar os dados do usuário logado;
- Campos dos formulários possuem validações lógicas e visuais;
- Os dados dos usuários e seus livros favoritados são armazenados em banco de dados MySql.

### :bulb: Antes de Começar
Clone e inicialize o backend [google-books-api-users-manager](https://github.com/orlando-messias/google-books-api-users-manager) para o gerenciamento do login e dos dados dos usuários.


### :gear: Instalações
```
## Clone este repositório
$ git clone https://github.com/orlando-messias/google-books-api-frontend

## Instale todas as dependências
$ npm install

## Inicialize o projeto
$ npm start

```

### :hammer_and_wrench: Tecnologias
- [ReactJS](https://reactjs.org/)
- [React Redux](https://redux.js.org//)
- [Axios](https://www.npmjs.com/package/axios)
- [React-Icons](https://react-icons.netlify.com)


#
> Developed by Orlando Messias [linkedin.com/in/orlando-messias-dev](https://www.linkedin.com/in/orlando-messias-dev)

