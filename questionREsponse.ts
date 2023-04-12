/*
1)Spiegazione generica (Cos’è, a cosa serve, che problema risolve, differenze con JS semplice)

è un linguagio di programmazione basato su javascript ,a differenza di quest'ultimo che  è debolmete tipizato ,typescript e fortemente tipizzato ciò previene molti problemi che possono insorgere in futuro

2)Il compilatore TS (perché è necessario? e come si usa?)

il compilatore ts si usa per convertire il linguaggio ts in js poiche i browser non riescono a leggere il ts e si usa con il comando "tsc file.ts" o "tsc file.ts -u" per rendere sempre attivo il compilatore

3)La Type Inference

la capacità di tipescript di capire il tipo di dato contenuto in una variabile


4)Il tipo ‘any’

il tipo ‘any’ indica che la variabile può contenere qualsiasi dato 

5)Il tipo Union

il tipo union è l'unione di più tipi ES.

let union : string | number ="stringa" OR 5


6)Il tipo Tuple

Il tipo Tuple è un array con un numero specifico di dati e i tipi di dato in base alla loro posizione ES:
let array :[string,number] = ["stringa",5]


7)Le Interfaces in TS

Le Interfaces in TS sono ""creatori di tipi di dato"" applicabili in qualsiasi contesto ES:
interface prova {
  value1: string;
  value2: number;
}


*/
// interface prova  {value: string  | number}

//   let tesrt :pova= {value : 5}
