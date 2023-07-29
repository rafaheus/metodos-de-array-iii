const numeros = [1, 30, 4, 6, 80, 34, 100, 256];

// numeros.sort((a, b) => {
//     if (a < b) {
//         return -1
//     }

//     if (a > b) {
//         return 1;
//     }

//     return 0;
// });

numeros.sort((a, b) => {
    return a - b;
});

console.log(numeros);