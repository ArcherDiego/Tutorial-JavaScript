// Basic JavaScript

// Criando Variaveis
// Numeros

var n1 = 5;             // var, let e const
const n2 = 7;

var sum = n1 + n2;      // soma
var subt = n1 - n2;     // subtração
let mult = n1 * n2;     // multiplicação
let div = n1 / n2;      // divisão

//console.log(sum);
//console.log(subt);
//console.log(mult);
//console.log(div);

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

console.log(myName)
console.log(typeof(myNumber))       // Ira retornar uma string, mesmo sendo um numero

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

let firstName = obj[0].firstName    // Pega o valor da key especifica
//console.log(firstName)