//NOTE -Snack 1
//         Dato l'array di nomi:

//         const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];

//         e dati due numeri min e max (min più piccolo di max).

//         Creiamo un nuovo array contenente i valori che hanno la posizione compresa tra i due numeri.
//         Eseguiamo questo esercizio prima con forEach e poi con filter.
//         esempio: dati i valori min: 2 e come max: 4 i nomi nell'array nuovo saranno i nomi compresi tra queste posizioni 2 e 4

// const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
// const arr2 = [];

// //-2 prompt
// let min = parseInt(prompt('dammi il numero min') );
// let max = parseInt(prompt('dammi il numero max') );

// //funzione con min e max parametri
// function estrazioneNomi(min, max){

//     myArray.forEach((element, index ) => {
//         if( index >= min && index  <= max) {
//             arr2.push(element); 
//         }
        
//     });
// }
// // invocazione funzione creata: è importante fare questo passaggio dell'invocazione quando si crea una funzione
// estrazioneNomi(min, max);


// console.log(estrazioneNomi);//condizione con il forEach
// // 


//NOTE - Snack 2
//         Dato un elenco degli studenti di una facoltà, con il totale dei loro voti
//         let students = [
//             { name: 'Marco', id: 213, grades: 78 },
//             { name: 'Paola', id: 110, grades: 96 },
//             { name: 'Andrea', id: 250, grades: 48 },
//             { name: 'Gaia', id: 145, grades: 74 },
//             { name: 'Luigi', id: 196, grades: 68 },
//             { name: 'Piero', id: 102, grades: 50 },
//             { name: 'Francesca', id: 120, grades: 84 },
//         ];

//         1- Dobbiamo creare delle targhe con il loro nome in maiuscolo. Ci serve quindi un nuovo array di stringhe. Ogni elemento del nuovo array sarà il nome dello studente ma con tutte le lettere maiuscole.
//         2-  Dobbiamo creare un nuovo array con gli studenti che hanno un totale di voti superiore a 70
//         3-  Dobbiamo creare un nuovo array di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120


// let students = [
//     { name: 'Marco', id: 213, grades: 78 },
//     { name: 'Paola', id: 110, grades: 96 },
//     { name: 'Andrea', id: 250, grades: 48 },
//     { name: 'Gaia', id: 145, grades: 74 },
//     { name: 'Luigi', id: 196, grades: 68 },
//     { name: 'Piero', id: 102, grades: 50 },
//     { name: 'Francesca', id: 120, grades: 84 },
//   ];
// 1- Dobbiamo creare delle targhe con il loro nome in maiuscolo. Ci serve quindi un nuovo array di stringhe. Ogni elemento del nuovo array sarà il nome dello studente ma con tutte le lettere maiuscole.
// 2-  Dobbiamo creare un nuovo array con gli studenti che hanno un totale di voti superiore a 70
// 3-  Dobbiamo creare un nuovo array di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120

// let Uppercase = students.map( (element)=> {
//     return element.name.toUppercase();
// } ) ;

// console.log( arrUppercase )

// let arrGrades1 = students.filter( (element) =>{
//     if( element.grades > 70){

//         // return true
//     }
//     return element.grades > 70
// }   )

// // 2

// console.log( arrUppercase )


//NOTE - Snack 3
// Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

 

// const { nome, peso } = biciDaCorsa;
// console.log( nome, peso )

    const biciDaCorsa = [
        {
            nome: 'blu',
            peso: '20'
        },
        {
            nome: 'rossa',
            peso: 30
        },
        {
            nome: 'verde',
            peso: 22
        },
        {
            nome: 'gialla',
            peso: 35
        },
        {
            nome: 'blu',
            peso: 13
        },
    ]


    biciDaCorsa.forEach( ( { nome, peso } , index) => {
        console.log( nome, alimentazione ) // 1°giro ciclo: blu 20, 2°giro ciclo: rossa 30,..
    })

    console.log( biciDaCorsa[1].nome, biciDaCorsa[1].peso )

    // destrutturazione di un oggetto singolo
    // const{ nome, peso } = biciDaCorsa[1];

    // console.log( nome, peso )

    





//NOTE - Snack4
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti. Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
// segno_spunta_bianco
// occhi
// mani_alzate

















