## Teste_Entrevista
#Teste que consistia na seguintes perguntas 

1) Observe o trecho de código abaixo:

int INDICE = 13, SOMA = 0, K = 0;

enquanto K < INDICE faça
{
K = K + 1;
SOMA = SOMA + K;
}
imprimir(SOMA);
Ao final do processamento, qual será o valor da variável SOMA?

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
alert(soma);
}

2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.
IMPORTANTE:
Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;
~~~js
 export function Fibonacci(){
function verificaFibonacci(numero) {
    let a = 0;
    let b = 1;
    let proximo = a + b;
  
    while (proximo <= numero) {
      if (proximo === numero) {
        return `O número ${numero} pertence à sequência de Fibonacci.`;
      }
      a = b;
      b = proximo;
      proximo = a + b;
    }
  
    return `O número ${numero} não pertence à sequência de Fibonacci.`;
  }
  
  // Teste a função com um número específico
  let numeroInformado = 21;
  alert(verificaFibonacci(numeroInformado));
 ~~~
}
3) Descubra a lógica e complete o próximo elemento:

a) 1, 3, 5, 7, **9**

b) 2, 4, 8, 16, 32, 64, **128**

c) 0, 1, 4, 9, 16, 25, 36, **49**

d) 4, 16, 36, 64, **100**

e) 1, 1, 2, 3, 5, 8, **13**

f) 2,10, 12, 16, 17, 18, 19, **20**

4) Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em uma sala diferente. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada.
Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?
~~~js
     idas      |          2              |       2              |    2                    |
interrupitores | primeira Sala           |Segunda sala          |terceira Sala            |
1 interrupitor | V                       | ñ precisou usar   (F)|ñ precisou usar   (F)    |
2 interrupitor |ñ precisou usar   (F)    |V                     |ñ precisou usar   (F)    |
3 interrupitor |ñ precisou usar   (F)    | ñ precisou usar  (F) |V                        |

De acordo com a tabela verdade e o acesso ilimitado a sala dos interrupitores podemos observar a sequencia que liga a lampada.

ou se nao tiver acesso ilimitado a sala dos interrupitores temos outra alternativa de resolver

Ligue o primeiro interruptor e aguarde alguns minutos.
Desligue o primeiro interruptor e ligue o segundo interruptor.
Vá até a sala das lâmpadas e observe qual está acesa e qual está apagada e qual esta quente e assim voce saberá qual liga qual.
~~~


6) Escreva um programa que inverta os caracteres de um string.
IMPORTANTE:

a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse;
 ~~~js
 function inverterString(str) {
    let reversedString = '';
    for (let i = str.length - 1; i >= 0; i--) {
      reversedString += str[i];
    }
    return reversedString;
  }
  
  // Exemplo de uso
  let minhaString = prompt("Digite uma palavra");
  let minhaStringInvertida = inverterString(minhaString);
  alert(minhaStringInvertida); 
}
~~~

