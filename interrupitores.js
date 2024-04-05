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
/*
ou se nao tiver acesso ilimitado a sala dos interrupitores temos outra alternativa de resolver

Ligue o primeiro interruptor e aguarde alguns minutos.
Desligue o primeiro interruptor e ligue o segundo interruptor.
Vá até a sala das lâmpadas e observe qual está acesa e qual está apagada e qual esta quente e assim voce saberá qual liga qual.

*/
