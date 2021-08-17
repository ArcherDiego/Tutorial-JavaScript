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
//console.log(firstName)

/*-------------------------------------------------------------------------------------------------------*/

// Função
function firstFunction(){
    var first = '1º'
    return first
}
var first                       // variavel Undefined

//console.log(firstFunction());
//console.log(toma)

/*-------------------------------------------------------------------------------------------------------*/

// IF e ELSE
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

/*-------------------------------------------------------------------------------------------------------*/

// Loops