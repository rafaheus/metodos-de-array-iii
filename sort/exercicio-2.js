const carros = [
    { nome: 'corola', marca:'toyota', ano: '2020', cor: 'prata' },
    { nome: 'argo', marca:'fiat', ano: '2021', cor: 'preto' },
    { nome: 'ranger', marca:'ford', ano: '2021', cor: 'prata' },
    { nome: 'hilux', marca:'toyota', ano: '2018', cor: 'branco' }
];

// carros.sort((a, b) => {
//     return a.nome.localeCompare(b.nome);
// });
// console.log(carros);

// carros.sort((a, b) => {
//     return b.nome.localeCompare(a.nome);
// });
// console.log(carros);


const ordenarCarros = (arrayCarros, campoOrdenacao) => {
    arrayCarros.sort((a, b) => {
     return a[campoOrdenacao].localeCompare(b[campoOrdenacao]);
 });
console.log(carros); 
}

ordenarCarros(carros, 'nome');
ordenarCarros(carros, 'marca');
ordenarCarros(carros, 'ano');
ordenarCarros(carros, 'cor');
