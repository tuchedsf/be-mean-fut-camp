/*
movimenta os times no array para formar o chaveamento dos jogos
A logica básica 1 de B passa para 2 de A, os demais elementos de A andam uma casa para frente,
o ultimo elemento de A passa a ser o ultimo elemento de B e
os elementos de B andam uma casa para tras.
Ex.:
ABC
FED
Apos passar por esta funcao resultará em:
AFB
EDC
*/
module.exports = (timesA, timesB) => {
  // console.log('reposicionaTimes');
  const timesAuxA = [];
  const timesAuxB = [];

  const ultimoA = timesA[timesA.length - 1];
  const primeiroB = timesB[0];

  // monta array times A
  timesAuxA.push(timesA[0]);
  timesAuxA.push(primeiroB);
  for (let index = 0; index < timesA.length; index++) {
    if (index > 0 && index < timesA.length - 1) timesAuxA.push(timesA[index]);
  }

  // monta array B
  for (let index = 0; index < timesB.length; index++) {
    if (index > 0) timesAuxB.push(timesB[index]);
  }
  timesAuxB.push(ultimoA);
  // concatena os elementos para retornar um unico array
  timesAuxB.forEach(element => {
    timesAuxA.push(element);
  });
  return timesAuxA;
};
