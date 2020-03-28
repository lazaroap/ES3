const faker = require('faker');

faker.locale = 'pt_BR';

const clients = [];

for (let i = 0; i < 2; i++) {
    const name = faker.name.findName();
    const birth = faker.date.past(109, 2019);
    const genre = faker.random.boolean() == true ? 'M' : 'F';
    const lastPurchase = faker.date.past();
    const countPurchase = faker.random.number(100);


    client = {
        name,
        birth,
        genre,
        lastPurchase,
        countPurchase,
    }

    clients.push(client);
}

//************************************************************************************************************************************************************************************
//Desenvolva, utilizando filter , uma função que, dado um caractere de entrada, retorne todos os registros de clientes cujo o nome inicia com o caractere.
const firstLetter = clients.filter(clients => clients.name[0] == 'A');
//console.log(firstLetter);


//************************************************************************************************************************************************************************************
//Retorne o array de clientes
console.log(clients);


//************************************************************************************************************************************************************************************
//Desenvolva uma função que, dado o caractere de entrada, retorna apenas um número com o total de registros encontrados.
const firstLetterCounter = clients.map(clients => clients.name[0] == 'A').reduce((acc, next) => acc += next);
//console.log(firstLetterCounter);


//************************************************************************************************************************************************************************************
//Desenvolva uma função que retorne apenas os nomes dos clientes.
const Names = clients.map(clients => clients.name);
//console.log(Names);


//************************************************************************************************************************************************************************************
//Desenvolva uma função que retorne apenas o primeiro nome dos clientes.
const firstName =  clients.map(clients => clients.name.split(' ')[0]);
//console.log(firstName);


//************************************************************************************************************************************************************************************
//Desenvolva uma função que retorne apenas o primeiro nome dos clientes cujo os nomes começam com o caractere de entrada da função.
const firstNameLetter = clients.filter(clients => clients.name[0] == 'A').map(clients => clients.name.split(' ')[0]);
console.log(firstNameLetter)


//************************************************************************************************************************************************************************************
//Desenvolva uma função que retorne todos os usuários que são maiores de idade.



//************************************************************************************************************************************************************************************
//Desenvolva uma função que, dado um nome de entrada, retorna se o nome está contido na lista.
const firstNameIsValid = (clients.map(clients => clients.name.split(' ')[0]).filter(clients => clients == 'Aline')).length > 0 ? 'Nome consta na lista' : 'Nome não consta na lista'
//console.log(firstNameIsValid);


//************************************************************************************************************************************************************************************
//Implemente uma função que retorna o total de vendas realizadas somando as compras de todos os clientes.
const totalPurchase = clients.map(clients => clients.countPurchase).reduce((sum, next) => sum += next)
//console.log(totalPurchase)


//************************************************************************************************************************************************************************************
//Implemente uma função que retorne os dados dos clientes que não compram há mais de 1 ano.


//************************************************************************************************************************************************************************************
//Implemente uma função que retorne os dados dos clientes que já realizaram mais de 15 compras.

