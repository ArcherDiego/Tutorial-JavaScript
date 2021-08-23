/* ------------------------------------- Basic JavaScript e EMCAS6 -------------------------------------*/

// Criando Variaveis
// Numeros

var n1 = 5;             // var (geral, global), let (geral, local) e const (variavel, imutavél)
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

// Condições

// Tabela com alguns elementos das condições

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

// Criando IF e ELSE

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

// Criando switch case

let letters = 'c';

switch (letters) {                                  // condição
    case 'a':
        //console.log(`Essa é a letra a`);
        break;                                      // o break é sempre necessário no final dos casos
    case 'b':
        //console.log(`Essa é a letra b`);
        break;
    case 'c':
    case 'd':
        //console.log(`Essas são as letras c & d`);   // dois casos com o mesmo resultado, por isso um break
        break;
    default:                                        // default é como o else
        //console.log('Isso não é uma letra.')
        break;
}

// Criando Operador ternario

function ter(num) {                     // Uma função usada como um if/else de boleano
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

/*---------------------------------------------------ES6-------------------------------------------------*/

// Criando função com seta (arrow)

const myFunc = () => "value";               // função com resoluções simples
const myConcat = (arr1, arr2) => {          // função com parametros, os parametros podem ter valor padrão
    return arr1.concat(arr2);                      
}                      

//console.log(myFunc)
//console.log(myConcat([1, 2], [3, 4, 5]));

// Criando função com operador spread

const sum2 = (...args) => {                     // Pega todos os parametros que entrão na função
    return args.reduce((a, b) => a + b, 0);     // Reduce() = afunila até existir um unico resultado
}

//console.log(sum2(1,2,3,4,5,6))

// Simplificando criação de variaveis que já existem dentro de um objeto

const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};

//const { today, tomorrow } = HIGH_TEMPERATURES;      // Criando duas variaveis com os resultados do obj
//const { today: highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES; // Também dá pra criar com outros nomes

/* ------------------------------------------------- DOM -------------------------------------------------*/

//Pop-ups iniciais

//window.alert('Isso é um alerta')                                //janela de alerta, onde só existe o OK
//window.confirm('Isso é uma pergunta com resposta boleana')      //janela de confirmação, onde há duas opções
//window.prompt('Isso é uma pergunta com caixa de texto')         //janela com text para digitar

// Pegando elementos e guardando em variaveis

//var main = window.document.getElementById('main')               // Pegando o elemento por ID
//let lorem = document.getElementsByTagName('p')[0]               // Pegando o elemento por TAG
//var img = document.getElementsByName('img')[0]                  // Pegando o elemento por NAME
//let title = document.getElementsByClassName('title')[0]         // Pegando o elemento por CLASS
//var body = document.querySelector('body')                       // Pegando o seletor do elemento por QUERY

/* ( Pode-se ocutar o window na hora de chamar o elemento, elementos no plural precisam ser especificados) */
// Chamando as variaveis e trocando seus respectivos CSS

//main.style.backgroundColor = 'black'        // Alterando a cor do fundo
//lorem.style.color = 'white'                 // Alterando a cor da letra
//title.style.color = 'green'                 // Alterando a cor da letra
//img.style.borderRadius = '100%'             // Colocando borda na imagem
//body.style.backgroundColor = 'purple'       // Alterando a cor do fundo

// Eventos DOM 

// Clicar
/*
function clickar(){                           // Usando  onclick="clickar()" no HTML
    img.style.borderStyle = 'solid'
    img.style.borderColor = 'red'
}

// Passando o mouse por cima e retirando
img.addEventListener('mouseenter', inImg)       // Usando addEventListener para não poluir o HTML
img.addEventListener('mouseout', outImg)
function inImg(){
    img.style.opacity = '0.5'
}
function outImg(){
    img.style.opacity = '1'
}
*/
// Pegando a hora do sistema

let now = new Date();
let hrs = now.getHours();
let minute = now.getMinutes();
let days = now.getDay();

//console.log(hrs);
//console.log(minute);                                // Uso do $ (sifrão) para escrever a variavel,
//console.log(`Agora são ${hrs}:${minute}.`)          // apenas executado com `` (crase)
//console.log(days);

/* -------------------------------------------------------------------------------------------------------*/