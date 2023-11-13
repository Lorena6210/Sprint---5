// Crie uma função chamada encontreMaiorSomaLinha que recebe uma matriz de números como argumento
const matriz = [
  [1,2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12]
];

function encontreMaiorSomaLinha(matriz){
let maiorSoma = 0;
let LinhaComMaiorSoma= []
for (let i =0; i < matriz.length; i++){
let soma = 0;
     for (let j =0; j< matriz[i].length; j++){
      soma += matriz[i][j];
    }
    if (soma > maiorSoma) {
      maiorSoma = soma;
      LinhaComMaiorSoma = matriz[i];
    }
  }

  return LinhaComMaiorSoma;
}

const maiorSomaLinha = encontreMaiorSomaLinha(matriz);

console.log("A linha com a maior soma é:", maiorSomaLinha);