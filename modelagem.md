Minha ideia:

Eu e alguns amigos do serviço nas horas vagas nos juntamos para jogar fifa (futebol virtual), então fazemos um campeonato entre a galera quando nos encontramos, porem muitas vezes não há a possibilidade de todos comparecerem e marcamos online com a pessoa para jogar e que o jogo passe a ser valido para o campeonato.

Hoje controlamos tudo via planilha, e como estou fazendo o curso do be-mean surgiu a ideia de fazer utilizando os conhecimentos obtidos durante o curso, para exercitar mesmo e ir aplicando o que foi aprendido em cada aula nesta app.

A ideia é controlar o campeonato online. 

No sistema havera campeontos que possuem equipes, jogos e classificação. Alem disto os usuarios do sistema possuirão times que serão inscritos em um campeonato.

As coleções:
CAMPEONATO 
```js
'use strict';

const mongoose = require('mongoose');
const classificacaoSchema = require('../../classificacao/molecules/molecule');
const jogosSchema = require('../../jogos/molecules/molecule');

const nome = { type: String, required: true }; 
const mata_mata = { type: Boolean, required: true, default: false }; 
const qtde_equipes = { type: Number, required: true, min: 2, max: 100 }; 
const qtde_grupos = { type: Number, required: true, min: 1, max: 25 };
const qtde_equipes_classificadas = { type: Number, required: true, min: 1 };
const qtde_equipes_rebaixadas = { type: Number, required: true};
const pontos_vitoria = { type: Number, required: true, min: 0, max: 10, default: 3 };
const pontos_empate = { type: Number, required: true, min: 0, max: 10, default: 1 };
const pontos_derrota = { type: Number, required: true, min: 0, max: 10, default: 0 };
const regulamento = { type: String, default: "Vitoria 3 pontos / Empate 1 ponto / Derrota 0 pontos" }; 
const organizadores = [ { type:Schema.Types.ObjectId, ref:'User'} ];
const criterios_desempate = [String]; //vitorias /saldo_gols
const equipes = [{ type:Schema.Types.ObjectId, ref:'User', time: String, identificador: Number }]
const classificacao = [classificacaoSchema];
const jogos = [jogosSchema];
const created_at = { type: Date, default: Date.now };

const _schema = {
    nome 
  , mata_mata
  , qtde_equipes
  , qtde_grupos
  , qtde_equipes_classificadas
  , qtde_equipes_rebaixadas
  , pontos_vitoria
  , pontos_empate
  , pontos_derrota
  , regulamento
  , organizadores
  , criterios_desempate
  , classificacao
  , jogos 
  , created_at
}

const campeonatoSchema = new mongoose.Schema(_schema);

module.exports = campeonatoSchema;
```

JOGOS
```js
'use strict';

const mongoose = require('mongoose');

const campeonato_id = { type:Schema.Types.ObjectId, ref:'Campeonato'};
const rodada = { type: Number, required: true}; 
const mandante = { type: Number, required: true}; 
const visitante = { type: Number, required: true}; 
const placar_mandante = { type: Number, required: true, default: 0}; 
const placar_visitante = { type: Number, required: true, default: 0}; 
const auditoria_mandante = { identificador_equioe: mandante, placar_mandante: placar_mandante, placar_visitante: placar_visitante};
const auditoria_visitante = { identificador_equioe: visitante, placar_mandante: placar_mandante, placar_visitante: placar_visitante};


const _schema = {
  campeonato_id 
  , rodada
  , mandante
  , visitante
  , placar_mandante
  , placar_visitante
  , auditoria_mandante 
  , auditoria_visitante
}

const schemaName = new mongoose.Schema(_schema);

module.exports = schemaName;
}
```

CLASSIFICACAO
```js
'use strict';

const mongoose = require('mongoose');

const campeonato_id= { type:Schema.Types.ObjectId, ref:'Campeonato'};
const grupo = { type: Number, required: true };
const time = { type: Number }; // identificador na lista de times do campeonato
const jogos = { type: Number, required: true, default: 0 }; //numero de jogos jogados
const pontos = { type: Number, required: true, default: 0 }; //numero de pontos conquistados
const vitorias = { type: Number, required: true, default: 0 }; //numero de vitorias conquistadas
const empates = { type: Number, required: true, default: 0 }; //numero de empates conquistados
const derrotas = { type: Number, required: true, default: 0 }; //numero de derrotas conquistadas
const gols_favor  = { type: Number, required: true, default: 0 }; //numero gols feitos
const gols_contra = { type: Number, required: true, default: 0 }; //numero gols sofridos
const saldo_gols = { type: Number, required: true, default: 0 }; // saldo de gols

const _schema = {
  campeonato_id
  , grupo 
  , time
  , jogos
  , pontos
  , vitorias
  , empates
  , derrotas
  , gols_favor
  , gols_contra
  , saldo_gols
}

const classificacaoSchema = new mongoose.Schema(_schema);

module.exports = classificacaoSchema;
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
•	Jogos, Classificação que estao separadas e Equipes que esta dentro da coleção campeonatos, devem ser coleções separadas ou juntas a campeonato?  
•	Na coleção de jogos, pensando na ideia online, para uma pessoa não ter que ficar atualizando sozinha todo o campeonado pensei na criação de um array auditoria onde os próprios jogadores da rodada colocam o resultado do jogo entre eles, se o resultado for igual o sistema assume aquele resultado como o oficial e realiza as atualizações, se for diferente neste caso o administrador da liga deve verificar e informar o resultado manualmente.  
•	A coleção de usuário apenas coloquei para ter uma ideia, mais depois a ideia é ver por exemplo a utilização do passport para definir melhor esta coleção.  
