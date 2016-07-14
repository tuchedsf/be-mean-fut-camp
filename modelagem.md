Minha ideia:

Eu e alguns amigos do serviço nas horas vagas nos juntamos para jogar fifa (futebol virtual), então fazemos um campeonato entre a galera quando nos encontramos, porem muitas vezes não há a possibilidade de todos comparecerem e marcamos online com a pessoa para jogar e que o jogo passe a ser valido para o campeonato.

Hoje controlamos tudo via planilha, e como estou fazendo o curso do be-mean surgiu a ideia de fazer utilizando os conhecimentos obtidos durante o curso, para exercitar mesmo e ir aplicando o que foi aprendido em cada aula nesta app.

A ideia é controlar o campeonato online. 

No sistema havera campeontos que possuem equipes, jogos e classificação. Alem disto os usuarios do sistema possuirão times que serão inscritos em um campeonato.

As coleções:
CAMPEONATO 
```
{     
  "nome": "String",  
  "mata-mata": "boolean",  
  "liga": "boolean",  
  "qtde_equipes": "number",  
  "qtde_grupos": "number",  
  "pontos_vitoria": "number",  
  "pontos_empate": " numbe",  
  "pontos_derrota": "number",  
  "regulamento": "String",  
  "rodada_atual": "String",  
  "criterios_Desempate": [   
    "vitoria",  
    "saldo_gols"  
  ],
  "administradores": [ 
    { 
      "type": "ObjectId",
      "ref": "usuario"
    }
  ],
  "equipes": [ 
    { 
      "type": "ObjectId",
      "ref": "equipes"
    }
  ],
  "createdAt": "Date",
  "jogos": [ 
    { 
      "type": "ObjectId",
      "ref": "jogos"
    }
  ],
  "classificacao": { 
    "type": "ObjectId",
    "ref": "classificacao"
  }
}
```

JOGOS
```
{ 
  "campeonato_id": "ObjectId",
  "rodada": "number",
  "mandante": "num_equipe ou equipe_id",
  "visitante": "num_equipe ou equipe_id",
  "placar_mandante": "number",
  "placar_visitante": "number",
  "auditoria": [ 
    { 
      "mandante": "num_equipe ou equipe_id",
      "placar_mandante": "number",
      "placar_visitante": "number"
    },
    { 
      "visitante": "num_equipe ou equipe_id",
      "placar_mandante": "number",
      "placar_visitante": "number"
    }
  ]
}
```

EQUIPES
```
{ 
  "campeonato": "ObjectID",
  "user_id": "ObjectID",
  "time": "String"
}
```

CLASSIFICACAO
```
{ 
  "campeonato_id": "Objectid",
  "grupo": "number",
  "estatistica": [ 
    { 
      "posicao": "number",
      "time": "objectid_equipe",
      "jogos": "number",
      "pontos": "number",
      "vitorias": "number",
      "empates": "number",
      "derrotas": "number",
      "gols_favor": "number",
      "gols_contra": "number",
      "saldo": "number"
    }
  ]
}
```

USUARIO
```
{ 
  "nome": "String",
  "time_coracao": "String",
  "avatar_path": "String",
  "campeonatos": [], // lista de campeonatos que o usuario participa.
  "username": "String",
  "email": "String",
  "password": "String",
  "createdAt": "Date"
}
```

Dúvidas quando a modelagem:  
•	A modelagem NOSQL ficou de forma satisfatória? Como estou acostumado com modelagem relacional esta parte ainda me deixa dúvidas. 
•	Jogos, Classificação e Equipes devem ser coleções separadas ou devem estar “embebed” na coleção campeonato?  
•	Na coleção de jogos, pensando na ideia online, para uma pessoa não ter que ficar atualizando sozinha todo o campeonado pensei na criação de um array auditoria onde os próprios jogadores da rodada colocam o resultado do jogo entre eles, se o resultado for igual o sistema assume aquele resultado como o oficial e realiza as atualizações, se for diferente neste caso o administrador da liga deve verificar e informar o resultado manualmente.  
•	A coleção de usuário apenas coloquei para ter uma ideia, mais depois a ideia é ver por exemplo a utilização do passport para definir melhor esta coleção.  
