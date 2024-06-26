// 5) Escreva um programa que inverta os caracteres de um string.
// IMPORTANTE:

// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
// b) Evite usar funções prontas, como, por exemplo, reverse;
export function InverterString() {
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

