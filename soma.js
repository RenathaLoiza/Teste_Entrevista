// 1- observe o trecho de código abaixo

// int indice = 13
// soma= 0
// k=0

// equanto k < indice faça
// {
//     k=k + 1;
// }
// imprimir (soma)
export function somaIndice(){

let indice = 13;
let soma = 0;
let k = 0;

// Enquanto k < indice faça
while (k < indice) {
    k = k + 1;
    soma = soma + k; // Somando o valor de k à soma
}

// Imprimir a soma
alert(`A soma dos elementos (k = k + 1) e (soma = soma + k) é igual ${soma}`);
}
