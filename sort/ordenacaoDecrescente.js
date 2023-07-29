const numeros = [1, 30, 4, 6, 80, 34, 100, 256, 13];

// numeros.sort((a, b) => {
//     if (a < b) {
//         return 1 //bmaior vai p lugar de amenor
//     }

//     if (a > b) {
//         return -1; //amaior vai para lugar de bmenor
//     }

//     return 0; //nada muda
// });

numeros.sort((a, b) => {
    return b - a;
});

console.log(numeros);