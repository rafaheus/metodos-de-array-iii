const pessoas = ['João', 'maria', 'luan', 'bruna']

//ordem crescente
pessoas.sort((a, b) => {
    return a.localeCompare(b);
});

console.log(pessoas);


//ordem decrescente
pessoas.sort((a, b) => {
    return b.localeCompare(a);
});

console.log(pessoas);