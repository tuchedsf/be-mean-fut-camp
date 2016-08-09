# be-mean-fut-camp
Projeto criado para por em pratica os conhecimentos obtidos no curso BE-MEAN, em uma aplicação "real". 

A ideia é criar uma API para genrenciamento de campeonatos de futebol.

Motivação:
Eu e alguns amigos do serviço nas horas vagas nos juntamos para jogar fifa (futebol virtual), então fazemos um campeonato entre a galera quando nos encontramos, porem muitas vezes não há a possibilidade de todos comparecerem e marcamos online com a pessoa para jogar e que o jogo passe a ser valido para o campeonato.

Hoje controlamos tudo via planilha, e como estou fazendo o curso do be-mean surgiu a ideia de fazer utilizando os conhecimentos obtidos durante o curso, para exercitar mesmo e ir aplicando o que foi aprendido em cada aula nesta app.

A ideia é controlar o campeonato online. 

### Observações 
    + os testes de crud acabaram que ficaram juntos com o testes de requisiçoes.
        * acredito que teriam que ser divididos em 1 teste de crud, e outro teste de retorno das requisiçoes

### Melhorias a serem feitas
    + Melhorar os testes
    + Melhorar atomização
    + Melhorar validação de campos.
    + substituir o jwt-simple do login pelo passport
    + Implementar front-end ( A ideia é ir implementando o front-end com as aulas de angular)
    + implementar controle de autorização  
    + verificar o porque o metodo de adicionar equipe, encontra equipe igual mais não retona erro quando encontra. (action-equipes-adicionar)

### O que esta funcionando:

#### Rotas usuario

- Novo usuario
```
Method: POST
Rota: http:localhost:3000/V1/api/users/new
Tipo parametro: body / x-www-form-urlencoded
Parametros:
email       tuchedsf@gmail.com
password    12345

Resposta: 
{
  "location": "/V1/api/users/579b98abfdf88cce5f0095e1",
  "data": {
    "__v": 0,
    "email": "tuchedsf@gmail.com",
    "password": "$2a$05$CINgMibFiU4WBjUsS6ne9.1vAXrC1XKKDK24eJlv2MRSUaXihx3L6",
    "_id": "579b98abfdf88cce5f0095e1",
    "created_at": "2016-07-29T17:55:55.208Z"
  }
}
```

- Login  
```
Method: POST
Rota: http:localhost:3000/V1/api/users/login
Tipo parametro: body / x-www-form-urlencoded
Parametros:
email       tuchedsf@gmail.com
password    12345

Resposta: 
{
  "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiI1NzliOWVkMTkyYTM4ZWVkNjE5NGUyMWUiLCJleHAiOjE0Njk5MDI5NjIxOTB9.wkHaaA66EY5oWtZMM_II4iG71F3Dk02_Bb2q8i6-RqE",
  "expires": 1469902962190,
  "user": {
    "_id": "579b9ed192a38eed6194e21e",
    "email": "tuchedsf@gmail.com",
    "password": "$2a$05$xFk905MORFCp2P6FU83yuuf57oUvUo4MgGmvcHguddbKYT37LM/Lm",
    "__v": 0,
    "created_at": "2016-07-29T18:22:09.852Z"
  }
}
```

obs.: o token retornado no login deve ser guardado para ser enviado juntamente com as outras requisições.
As rotas que necessitam estar logado são: login, find, findOne, delete, update.

- Find 
Deve ser passado junto da requisição um parametro de cabeçalho **x-access-token** com o token do usuário logado.

```
Method: Get
Rota: http:localhost:3000/V1/api/users/find
Tipo parametro: headers
Parametros:
x-access-token       eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiI1NzliOWVkMTkyYTM4ZWVkNjE5NGUyMWUiLCJleHAiOjE0Njk5MDI5NjIxOTB9.wkHaaA66EY5oWtZMM_II4iG71F3Dk02_Bb2q8i6-RqE 

Resposta: 
[
  {
    "_id": "579b9ed192a38eed6194e21e",
    "email": "tuchedsf@gmail.com",
    "password": "$2a$05$xFk905MORFCp2P6FU83yuuf57oUvUo4MgGmvcHguddbKYT37LM/Lm",
    "__v": 0,
    "created_at": "2016-07-29T18:22:09.852Z"
  },
  {
    "_id": "579ba00a92a38eed6194e21f",
    "email": "teste@gmail.com",
    "password": "$2a$05$SJG0aiHRszaS.QfiVKcvLOGSxfNgX1zzlK.Mb9d3p3kfOdlMyxskS",
    "__v": 0,
    "created_at": "2016-07-29T18:27:22.394Z"
  }
]
```

- Find com parametro
```
Method: Get
Rota: http:localhost:3000/V1/api/users/find?q=teste@gmail.com
Tipo parametro: headers
Parametros:
x-access-token       eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiI1NzliOWVkMTkyYTM4ZWVkNjE5NGUyMWUiLCJleHAiOjE0Njk5MDI5NjIxOTB9.wkHaaA66EY5oWtZMM_II4iG71F3Dk02_Bb2q8i6-RqE 

Resposta: 
[
  {
    "_id": "579ba00a92a38eed6194e21f",
    "email": "teste@gmail.com",
    "password": "$2a$05$SJG0aiHRszaS.QfiVKcvLOGSxfNgX1zzlK.Mb9d3p3kfOdlMyxskS",
    "__v": 0,
    "created_at": "2016-07-29T18:27:22.394Z"
  }
]
```

- FindOne
```
Method: Get
Rota: http://localhost:3000/V1/api/users/579ba00a92a38eed6194e21f
Tipo parametro: headers
Parametros:
x-access-token       eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiI1NzliOWVkMTkyYTM4ZWVkNjE5NGUyMWUiLCJleHAiOjE0Njk5MDI5NjIxOTB9.wkHaaA66EY5oWtZMM_II4iG71F3Dk02_Bb2q8i6-RqE 

Resposta: 
{
  "_id": "579ba00a92a38eed6194e21f",
  "email": "teste@gmail.com",
  "password": "$2a$05$SJG0aiHRszaS.QfiVKcvLOGSxfNgX1zzlK.Mb9d3p3kfOdlMyxskS",
  "__v": 0,
  "created_at": "2016-07-29T18:27:22.394Z"
}
```

- Update
```
Method: PUT
Rota: http:localhost:3000/V1/api/users/579ba00a92a38eed6194e21f
Tipo parametro: header - body / x-www-form-urlencoded
Parametros:
Headers:
x-access-token       eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiI1NzliOWVkMTkyYTM4ZWVkNjE5NGUyMWUiLCJleHAiOjE0Njk5MDI5NjIxOTB9.wkHaaA66EY5oWtZMM_II4iG71F3Dk02_Bb2q8i6-RqE

Body:
password    mudeisenha

Resposta: 
{
  "location": "/V1/api/users/579ba00a92a38eed6194e21f",
  "data": {
    "ok": 1,
    "nModified": 1,
    "n": 1
  }
}
```

- Delete
```
Method: Delete
Rota: http://localhost:3000/V1/api/users/579ba00a92a38eed6194e21f
Tipo parametro: headers
Parametros:
x-access-token       eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiI1NzliOWVkMTkyYTM4ZWVkNjE5NGUyMWUiLCJleHAiOjE0Njk5MDI5NjIxOTB9.wkHaaA66EY5oWtZMM_II4iG71F3Dk02_Bb2q8i6-RqE 

Resposta: 

```

#### Rotas Campeonato
- Novo
- Find
- FindOne
- Update
- Delete
- AdicionarOrganizador
- RemoverOrganizador
- AdicionarEquipe
- RemoverEquipe
- GerarClassificacao
- AtualizarClassificacao -> Não
- GerarTabelaJogos -> Não

#### Rotas Jogos
- AtualizarResultado -> Não

##### Retorno em caso de erro 
Abaixo exemplo como serão retornados os erros da api...
```
{
  "status": 401,
  "code": "1001",
  "message": "Usuario e/ou password invalidos"
}
```

### Referências Bibliograficas

- Curso Be-Mean Instagram - [https://github.com/Webschool-io/be-mean-instagram](https://github.com/Webschool-io/be-mean-instagram)
- Criar api node e autenticar com Web Tokens JWT - [https://rcdevlabs.github.io/2015/02/12/como-criar-uma-api-restfull-em-nodejs-e-autenticar-usando-json-web-token-jwt/](https://rcdevlabs.github.io/2015/02/12/como-criar-uma-api-restfull-em-nodejs-e-autenticar-usando-json-web-token-jwt/)
- Webinar Design de APIs RESTful - Sensedia - [https://www.youtube.com/watch?v=psLrAsdHltQ] (https://www.youtube.com/watch?v=psLrAsdHltQ) 
- Testing Node.js with Mocha and Chai - [http://mherman.org/blog/2015/09/10/testing-node-js-with-mocha-and-chai/](http://mherman.org/blog/2015/09/10/testing-node-js-with-mocha-and-chai/)
