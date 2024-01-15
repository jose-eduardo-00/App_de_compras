
const hoje = new Date()
const mes = hoje.getMonth()
const ano = hoje.getFullYear().toString().slice(-2)

console.log(ano);

if (mes === 0) {
    console.log('Janeiro');
}

// exemplo de como pegar o mes e o ano(com apenas os dois ultimos digitos do ano)