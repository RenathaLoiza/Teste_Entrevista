// 4) Você está em uma sala com três interruptores, (1 com 3)
// cada um conectado a uma lâmpada em uma sala diferente.( conectado cada sala difrente)
//Você não pode ver as lâmpadas da sala em que está, (não da para ver)
//mas pode ligar e desligar os interruptores quantas vezes quiser. (posso ligar e desligar)
//Seu objetivo é descobrir qual interruptor controla qual lâmpada.

// Como você faria para descobrir, usando apenas (duas idas até uma das salas das lâmpadas), qual interruptor controla cada lâmpada?
/*
     idas     |          2              |       2              |    2                    |
interrupitores| primeira Sala           |Segunda sala          |terceira Sala            |
1 interrupitor| V                       | ñ precisou usar   (F)|ñ precisou usar   (F)    |
2 interrupitor|ñ precisou usar   (F)    |V                     |ñ precisou usar   (F)    |
3 interrupitor|ñ precisou usar   (F)    | ñ precisou usar  (F) |V                        |

De acordo com a tabela verdade e o acesso ilimitado a sala dos interrupitores podemos observar a sequencia que liga a lampada.
*/
export function interrupitor() {
     

let interrupitor1= "sim";
let interrupitor2= "sim";
let interrupitor3= "sim";
let compativellampada1 =prompt("Para a lampada ligada digite true ou desligada false");
let compativellampada2 =prompt("Para a lampada ligada digite true ou desligada false");
let compativellampada3 =prompt("Para a lampada ligada digite true ou desligada false");

if(interrupitor1==compativellampada1 && interrupitor2 !== compativellampada2 && interrupitor3 !== compativellampada3 ){
 alert(`interrupitor 1 ${interrupitor1} liga lampada 1 ${compativellampada1}
        interrupitor 2 ${interrupitor2} liga lampada 2 ${compativellampada2}
        interrupitor 3 ${interrupitor3} liga lampada 3 ${compativellampada3}`)
}
else if(interrupitor1 == compativellampada2 && interrupitor2 !== compativellampada3 && interrupitor3 !== compativellampada1){
     alert(`interrupitor 1 ${interrupitor1} liga lampada 2 ${compativellampada2}
            interrupitor 2 ${interrupitor2} liga lampada 3 ${compativellampada3}
            interrupitor 3 ${interrupitor3} liga lampada 1 ${compativellampada1}
     `)

}
else {
     alert(`interrupitor 1 ${interrupitor1} liga lampada 3 ${compativellampada2}
            interrupitor 2 ${interrupitor2} liga lampada 1 ${compativellampada3}
            interrupitor 3 ${interrupitor3} liga lampada 2 ${compativellampada1}
`)
}
}