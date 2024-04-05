
export function LogicaNumerica() {
    

alert(" Descubra a lógica e complete o próximo elemento:")
let opcoes=prompt(` Digite uma das opçoes abaixo:
a) 1, 3, 5, 7, ___

b) 2, 4, 8, 16, 32, 64, ____

c) 0, 1, 4, 9, 16, 25, 36, ____

d) 4, 16, 36, 64, ____

e) 1, 1, 2, 3, 5, 8, ____

f) 2,10, 12, 16, 17, 18, 19, ____
`)

switch (opcoes.toLowerCase()) {
    case "a":
        // a) 1, 3, 5, 7, [9 ] pulando 2 em 2
        let num =[1, 3, 5, 7]
        let num1 = 7+2; //9
        alert(`Os numeros da lista são: ${num} e o proximo é ${num1}.`)
        break;
    
    case "b":
        // b) 2, 4, 8, 16, 32, 64, [128] somando 64 + 64
        let numeros =[ 2, 4, 8, 16, 32, 64]
        let numero = numeros.reduce((calculo,nume)=>calculo + nume,2)
        alert(`Os numeros da lista são: ${numeros} e o proximo é ${numero}.`)
        break;
    case "c":
        // c) 0, 1, 4, 9, 16, 25, 36,[49] somando com numeros impar em ordem cresencte
        //1,3,5,7,9,11,13 somando cada numero acima c/ esses.
        let array=[ 0, 1, 4, 9, 16, 25, 36]
        let numeroImpar = 36+13; //49
        alert(`Os numeros da lista são: ${array} e o proximo é ${numeroImpar}.`)
        break;
    case "d":
        // d) 4, 16, 36, 64, [100] quadrado dos numeros pares
        /*
        4+12
        16+20
        36+28
        64+36 = 100
        */
        let array1=[4, 16, 36, 64]
        let divisao = 64+36;// 100
        alert(`Os numeros da lista são: ${array1} e o proximo é ${divisao}.`)
        break;
    case "e":
        // e) 1, 1, 2, 3, 5, 8,[ 13] soma
        let numberFibo =[1, 1, 2, 3, 5, 8]
        let somas1 = 8+5; //13
        alert(`Os numeros da lista são: ${numberFibo} e o proximo é ${somas1}.`)
        break;
    case "f":
        // f) 2,10, 12, 16, 17, 18, 19,[20] acrescentei  na soma
    let number =[2,10, 12, 16, 17, 18, 19]
    let somas = 19+1; //20
    alert(`Os numeros da lista são: ${number} e o proximo é ${somas}.`)
    break;
    
    default:
        alert("digite um caracter das opções")
        break;
}

}

















