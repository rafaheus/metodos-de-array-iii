const array = [[0, 1], [2, 3, 4], [14, 22, 98]];

const arrayReduzido = array.reduce((acumulador, elementoAtual, indice, array) => {
    return [... acumulador, ... elementoAtual];
});

console.log(arrayReduzido);

const arrayFinal = arrayReduzido.reduce((acumulador, elementoAtual, indice, array) => {
    return acumulador + elementoAtual;
});

console.log(arrayFinal);