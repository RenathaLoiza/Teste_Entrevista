import { Fibonacci } from "./fibonacc.js";
import { LogicaNumerica } from "./logicaNumero.js";
import { somaIndice } from "./soma.js";
import { InverterString } from "./string.js";

let entradaSaida = true;

while (entradaSaida) {

let opcoes=parseInt(prompt(` digite uma opção
1- Soma Indice
2- Fibonacci
3- Logica Númerica
4- solução so e possivel ser vista na IDE (opçao não digitavel)
5-Inverter String
6-Sair
`))

switch (opcoes) {
    case 1:
        somaIndice()
        break;
    case 2 :
        Fibonacci()
        break;
    case 3:
        LogicaNumerica()
        break;
    case 4 :
        
        break;
    case 5:
        InverterString()
        break;
    case 6:
        entradaSaida = false

        break;

    default:
        alert("opção invalida")
        break;
}
}