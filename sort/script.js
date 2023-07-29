//exemplo de ordenaçao com funcao callback

const array = [2, 4, 1, 20, 3, 43];

array.sort((a,b) => {
    return a-b;
});

//[1, 2, 3, 4, 20, 43]