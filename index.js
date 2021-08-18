// Basic JavaScript

// Criando Variaveis
// Numeros

var n1 = 5;             // var (geral), let (variavel variavel(k k k)) e const (variavel constante)
const n2 = 7;

var sum = n1 + n2;      // soma
var subt = n1 - n2;     // subtração
let mult = n1 * n2;     // multiplicação
let div = n1 / n2;      // divisão
let rest = n1 % n2;     // divisão porém pega o resto
let elev = n1 ** n2;    // elevação

//console.log(sum);
//console.log(subt);
//console.log(mult);
//console.log(div);
//console.log(rest);
//console.log(elev);

var conc = String(n1) + String(n2);     // Concatenação e transformação de number to string
const divFloat = div.toFixed(2)         // Coloca 2 numeros depois da virgula

//console.log(conc);
//console.log(divFloat)

typeof(sum);            // typeof serve para descobrir o tipo da variavel
typeof(conc);           // number, string, boolean, function, object, null e undefined

//console.log(typeof(sum));
//console.log(typeof(conc));

/*-------------------------------------------------------------------------------------------------------*/

// String

let myName = 'Diego'
let myNumber = '23'

//console.log(myName)
//console.log(typeof(myNumber))             // Ira retornar uma string, mesmo sendo um numero
//console.log(myName.length)                // Informa a quantidade de numero de letras
//console.log(typeof(myName.length))        // É um number, o typeof
//console.log(typeof(Number(myNumber)))     // transforma string em number
//console.log(parseInt(myNumber, 10))       // utilizando radix (base numerica) para transformar em number

/*-------------------------------------------------------------------------------------------------------*/

let arr = ['Diego', 23, 'Danganronpa'];     // Criando array

//console.log(arr);
//console.log(typeof(arr));       // typeof é um object não importa o que tem dentro

// Concatenando Strings com array
let concArr = 'Meu nome é ' + arr[0] + ' e eu tenho ' + arr[1] + ' anos, e eu gosto de ' + arr[2] + '.'
// console.log(concArr)

// Manipulando o array com: push(), pop(), shift e unshift()
let arr2 = [1, 1, 2]
arr2.push(3)            // Adiciona no ultimo slote do array
arr2.pop()              // Deleta o ultimo slote do array
arr2.shift()            // Deleta o primeiro slote do array
arr2.unshift(7)          // Adiciona no primeiro slote do array

//console.log(arr2)

/*-------------------------------------------------------------------------------------------------------*/

// Escrevendo alguns 'simbolos' literais
let text = 'DOS é \"Diego de Oliveira Santos\"' + '\\ Uma barra' + '\n New Line' + '\t Tab'

//console.log(text)

/*-------------------------------------------------------------------------------------------------------*/

// Criando Objeto
let obj = [ 
    {
        firstName: 'Diego',
        lastName: 'Santos',
        age: 23,
        anime: 'Fate Stay/Night Unlimited Blade Works'
    },
    {
        firstName: 'Fernando',
        lastName: 'Plá',
        age: 22,
        anime: 'Re:Zero'
    },
    {
        firstName: 'Pedro',
        lastName: 'Ferreira',
        age: 23,
        anime: 'Hunter x Hunter'
    }
]

//console.log(obj)

// Encontrando especificamente um objeto

let firstName = obj[0].firstName    // Pega o valor(value) da propriedade(key) especificada do objeto
obj.add = 'novo elemento'           // Adição de elementos ao objeto
delete obj.add                      // Deleta um elemento do objeto

//console.log(firstName)
//console.log(obj)

/*-------------------------------------------------------------------------------------------------------*/

// Criando Função
function firstFunction(){
    var first = '1º'            // variaveis dentro da função só serve para a mesma
    return first
}
var first                       // variavel Undefined

//console.log(firstFunction());
//console.log(toma)

/*-------------------------------------------------------------------------------------------------------*/

// Criando IF e ELSE
// Tabela com alguns elementos unicos do IF

/*
    == igualdade
    === estritamente igualdade (considerando até o typeof)
    ! negação
    != diferente
    !== estritamente diferente
    < menor
    > maior
    <= menor ou igual
    >= maior ou igual
    && sinal de 'E'
    || sinal de 'OU'
*/
/*
let a = 1;
let b = 3;
let c = 2;

if(a == b){                 // if é um 'se' que dentro encontra-se uma condição
    var sum2 = a + b
    console.log(sum2)
} else if(a == c){          // else if é um 'senão se', ele também tem condição
    var subt2 = a - c
    console.log(subt2)
} else{                     // else é o 'senão', else não tem condição
    console.log('Não quero pensar')
}
*/

// Criando Operador ternario

function ter(num) {
    return (num == 0) ? 'Igual a zero'
    : 'Não é igual a zero'
}

function opTer(num){
    return (num < 0) ? 'Menor que zero'
    : (num > 0) ? 'Maior que zero'
    : 'Igual a zero';
}

//console.log(ter(0));
//console.log(opTer(5));

/*-------------------------------------------------------------------------------------------------------*/

// Criando Loops
// while
/*
while(true){                // Criando um loop infinito (não crie um e use console.log)
    var n3 = 0;             // o loop só vai existir se a condição for verdadeira
    n3++;
}
*/

// do while
/*
do{                         // o código vai repitir pelo menos uma vez antes de verificar a
    let x = 0;              // condição do while lá embaixo, (no caso ele só vai repitir uma vez)
    x++;
    let arr4 = []
    arr4.push(x)
    console.log(arr4)
}while(false)
*/

// for
/*
let arr3 = [0];
for (let i = 1; i <= 10; i++) {     // faz um loop para armazenar em um array os numeros de 1 a 10
    arr3.push(i)                    // (o 0 já esta dentro do array)
}
console.log(arr3)
*/

/*-------------------------------------------------------------------------------------------------------*/

// Criando um numero randomico

Math.random(20)                         // randomiza um número, entre parenteses está o gap do random
Math.floor(Math.random(20))             // arredonda o número randomizado

function randomRange(myMin, myMax) {    // já que os random começa com zero, podemos alterar essa logica

    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

/*-------------------------------------------------------------------------------------------------------*/

