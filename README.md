
## social-network api

este projeto tem licença livre, baixe, melhore e use como quiser. Feito com carinho!
## Documentação da API

## AUTENTICAÇÂO

### CRIAR UMA CONTA

```http
  POST /api/auth/register
```

| Parâmetro   | Tipo       | Descrição  |                           |
| :---------- | :--------- | :--------- |:---------
| `username` | `string` | **Obrigatório**. |BODY
| `email` | `string` | **Obrigatório**. |BODY
| `password` | `string` | **Obrigatório**. |BODY

requisição/resposta

![prod 1](https://github.com/matheusgit1/api-social-network/blob/main/api-preview/auth/create%20acount.PNG)


### LOGIN

```http
  POST /api/auth/login
```

| Parâmetro   | Tipo       | Descrição  |                           |
| :---------- | :--------- | :--------- |:---------
| `email` | `string` | **Obrigatório**. |BODY
| `password` | `string` | **Obrigatório**. |BODY

requisição/resposta

![prod 2](https://github.com/matheusgit1/api-social-network/blob/main/api-preview/auth/login.PNG)


#### accessToken

use o campo "accessToken" do retorno do login de usuario para navegar nas rotas autenticadas.
utilize ```token: accessToken ``` nos headers de cada requisição

### ALTERAR SENHA

```http
  PUT /api/auth/change-password
```

| Parâmetro   | Tipo       | Descrição  |                           |
| :---------- | :--------- | :--------- |:---------
| `confirmPassword` | `string` | **Obrigatório**. |BODY
| `password` | `string` | **Obrigatório**. |BODY
| `token` | `string` | **Obrigatório**. | headers

requisição/resposta

![prod 3](https://github.com/matheusgit1/api-social-network/blob/main/api-preview/auth/change%20password.PNG)


## ROTAS DE USUARIO

### RECUPERAR DADOS DE UM USUARIO

```http
  POST /api/users/
```

| Parâmetro   | Tipo       | Descrição  |                           |
| :---------- | :--------- | :--------- |:---------
| `token` | `string` | **Obrigatório**. | headers

requisição/resposta

![prod 4](https://github.com/matheusgit1/api-social-network/blob/main/api-preview/users/get%20user.PNG)

### ATUALIZAR DADOS DE UM USUARIO

```http
  PUT /api/users/:id
```

| Parâmetro   | Tipo       | Descrição  |                           |
| :---------- | :--------- | :--------- |:---------
| `id` | `string` | id de usuario. **Obrigatório**. | parametro da url
| `token` | `string` | token de altenticação. **Obrigatório**. | headers
| `email` | `string` | **OPCIONAL** | BODY
| `desc` | `string` | descrição de usuario. **OPCIONAL** | BODY
| `city` | `string` | cidade atual. **OPCIONAL** | BODY
| `from` | `string` | cidade natal. **OPCIONAL** | BODY

requisição/resposta

![prod 5](https://github.com/matheusgit1/api-social-network/blob/main/api-preview/users/update%20user.PNG)

### DELETAR UM USUARIO

```http
  DELETE /api/users/:id
```

| Parâmetro   | Tipo       | Descrição  |                           |
| :---------- | :--------- | :--------- |:---------
| `id` | `string` | id de usuario. **Obrigatório**. | parametro da url
| `userId` | `string` | id de usuario. **Obrigatório**. | body
| `token` | `string` | token de altenticação. **Obrigatório**. | headers

requisição/resposta

![prod 6](https://github.com/matheusgit1/api-social-network/blob/main/api-preview/users/delete%20user.PNG)

### SEGUIR UM USUARIO

```http
  PUT /api/users/:id/follow
```

| Parâmetro   | Tipo       | Descrição  |                           |
| :---------- | :--------- | :--------- |:---------
| `id` | `string` | id de usuario. **Obrigatório**. | parametro da url
| `userId` | `string` | id de usuario a ser seguido. **Obrigatório**. | body
| `token` | `string` | token de altenticação. **Obrigatório**. | headers

requisição/resposta

![prod 7](https://github.com/matheusgit1/api-social-network/blob/main/api-preview/users/follow%20user.PNG)

### DEIXAR DE SEGUIR UM USUARIO

```http
  PUT /api/users/:id/unfollow
```

| Parâmetro   | Tipo       | Descrição  |                           |
| :---------- | :--------- | :--------- |:---------
| `id` | `string` | id de usuario. **Obrigatório**. | parametro da url
| `userId` | `string` | id de usuario a deixar de ser seguido. **Obrigatório**. | body
| `token` | `string` | token de altenticação. **Obrigatório**. | headers

requisição/resposta

![prod 8](https://github.com/matheusgit1/api-social-network/blob/main/api-preview/users/unfollow%20user.PNG)

### RECUPERAR AMIGOS UM USUARIO

```http
  GET /api/users/friends/:id
```

| Parâmetro   | Tipo       | Descrição  |                           |
| :---------- | :--------- | :--------- |:---------
| `id` | `string` | id de usuario. **Obrigatório**. | parametro da url
| `token` | `string` | token de altenticação. **Obrigatório**. | headers

requisição/resposta

![prod 9](https://github.com/matheusgit1/api-social-network/blob/main/api-preview/users/get%20friends%20user.PNG)

## POSTS

### CRIAR UM POST

```http
  POST /api/posts/
```
	"userId":"61d341ccb8cd601494dfbc06",
	"desc":"thirdy post"
| Parâmetro   | Tipo       | Descrição  |                           |
| :---------- | :--------- | :--------- |:---------
| `token` | `string` | token de altenticação. **Obrigatório**. | headers
| `userId` | `string` | id de usuario. **Obrigatório**. | BODY
| `desc` | `string` | descrição. **OPCIONAL**. | BODY

requisição/resposta

![prod 10](https://github.com/matheusgit1/api-social-network/blob/main/api-preview/posts/create.PNG)

### ATUALIZAR UM POST

```http
  POST /api/posts/:id
```

| Parâmetro   | Tipo       | Descrição  |                           |
| :---------- | :--------- | :--------- |:---------
| `id` | `string` | id de post. **OBIGATORIO**. | parametro da url
| `token` | `string` | token de altenticação. **Obrigatório**. | headers
| `userId` | `string` | id de usuario. **Obrigatório**. | BODY
| `desc` | `string` | descrição. **OPCIONAL**. | BODY

requisição/resposta

![prod 11](https://github.com/matheusgit1/api-social-network/blob/main/api-preview/posts/update%20a%20post.PNG)


### DELETAR UM POST

```http
  DELETE /api/posts/:id
```

| Parâmetro   | Tipo       | Descrição  |                           |
| :---------- | :--------- | :--------- |:---------
| `id` | `string` | id de post. **OBIGATORIO**. | parametro da url
| `token` | `string` | token de altenticação. **Obrigatório**. | headers
| `userId` | `string` | id de usuario. **Obrigatório**. | BODY

requisição/resposta

![prod 12](https://github.com/matheusgit1/api-social-network/blob/main/api-preview/posts/delete.PNG)


### LIKE/DISLIKE UM POST

```http
  PUT /api/posts/:id/like
```

| Parâmetro   | Tipo       | Descrição  |                           |
| :---------- | :--------- | :--------- |:---------
| `id` | `string` | id de post. **OBIGATORIO**. | parametro da url
| `token` | `string` | token de altenticação. **Obrigatório**. | headers
| `userId` | `string` | id de usuario. **Obrigatório**. | BODY

requisição/resposta

![prod 13](https://github.com/matheusgit1/api-social-network/blob/main/api-preview/posts/like%20and%20dislike.PNG)

### RECUPERAR UM POST ESPECIFICO

```http
  GET /api/posts/:id
```

| Parâmetro   | Tipo       | Descrição  |                           |
| :---------- | :--------- | :--------- |:---------
| `id` | `string` | id de post. **OBIGATORIO**. | parametro da url
| `token` | `string` | token de altenticação. **Obrigatório**. | headers

requisição/resposta

![prod 14](https://github.com/matheusgit1/api-social-network/blob/main/api-preview/posts/get%20post.PNG)

### RECUPERAR A TIMELINE DE UM USUARIO

```http
  GET /api/posts/timeline/:id
```

| Parâmetro   | Tipo       | Descrição  |                           |
| :---------- | :--------- | :--------- |:---------
| `id` | `string` | id de usuario. **OBIGATORIO**. | parametro da url
| `token` | `string` | token de altenticação. **Obrigatório**. | headers

requisição/resposta

![prod 15](https://github.com/matheusgit1/api-social-network/blob/main/api-preview/posts/post%20timeline.PNG)

### RECUPERAR TODOS OS POSTS DE TODOS OS USUARIOS

```http
  GET /api/posts/
```

| Parâmetro   | Tipo       | Descrição  |                           |
| :---------- | :--------- | :--------- |:---------
| `token` | `string` | token de altenticação. **Obrigatório**. | headers

requisição/resposta

![prod 16](https://github.com/matheusgit1/api-social-network/blob/main/api-preview/posts/get%20all%20posts%20off%20all%20users.PNG)


#### Autor: Matheus Alves Pereira
#### LinkedIn: https://www.linkedin.com/in/matheus-alves-pereira-4b3781222/

