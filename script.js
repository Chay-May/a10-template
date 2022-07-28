console.log ("Salve, rapaze")
/*
//ARRAY 1
const string = ['caneta', 'caderno', 'estojo']
//                  0         1          2

//ARRAY 2

const numeros = [9, 10, 3, 4, 1]

//ARRAY 3
const arrayMisto = ['cadeira', 3, false]

//ARRAY 4
const arrayUmValor = [1989]

//ARRAY 5
const arrayVazio = []

//PRÁTICA GUIADA
//IMPRIMINDO O TAMANHO DO ARRAY 1
console.log("Tamanho array strings", string.length)
console.log("Acessando ítem índice 3", string[3]) // undefined
console.log("Acessando ítem índice 2", string[2])
console.log("Acessando ítem índice 1", string[1])
console.log("Acessando ítem índice 0", string[0])

//PRÁTICA GUIADA2
//VERIFICANDO ÍTENS DO ARRAY 3
console.log(arrayMisto.includes(4))
console.log(arrayMisto.includes(3))
console.log(arrayMisto.includes("cadeira"))
console.log(arrayMisto.includes(false))

//IMPRIMINDO ÍTEM ÚNICO DO ARRAY 4
console.log('Ítem array 4', arrayUmValor[0])
console.log('Ítem array 4', arrayUmValor.length)

//PRÁTICA GUIADA3
//CÓPIA DO ARRAY 1 USANDO SINAL DE IGUAL
const copiadeString = string

console.log(string)
console.log("Cópia de strings com IGUAL", copiadeString)

//ADICIONANDO MAIS UM ÍTEM À CÓPIA STRING
copiadeString.push("agenda")
console.log(string)
console.log("Adicionando mais um ítem à cópia", copiadeString) // O ÍTEM "AGENDA" TAMBÉM FOI ADICIONADO À VARIÁVEL PRINCIPAL "STRING"

//CÓPIA DO ARRAY 1 USANDO SLICE
const copiaString = string.slice()
console.log(string)
console.log("Cópia de strings com SLICE", copiaString)

//ADICIONANDO MAIS UM ÍTEM À CÓPIA STRING
copiaString.push("jornal")
console.log(string)
console.log("Adicionando mais um ítem à cópia", copiaString)

//REMOVENDO OS ÍTENS DE ÍNDICE 2 E 3 DO COPIA STRING
console.log("CÓPIASTRING ANTES DA REMOÇÃO", copiaString)

copiaString.splice(2,2)
console.log("CÓPIASTRING DEPOIS DA REMOÇÃO", copiaString)

//ORDENANDO ARRAY 1
console.log("ARRAY STRINGS ANTES DA ORDENAÇÃO", string)

string.sort()
console.log("ARRAY STRINGS DEPOIS DA ORDENAÇÃO", string) //ORDENADO EM ORDEM ALFABÉTICA

//ORDENANDO ARRAY NUMEROS
console.log("ARRAY NÚMEROS ANTES DA ORDENAÇÃO", numeros)

numeros.sort()
console.log("ARRAY NÚMEROS DEPOIS DA ORDENAÇÃO", numeros)// DEVOLVE: [1, 10, 3, 4, 9]*/

//EXERCÍCIO DE FIXAÇÃO
//1. Crie um novo array. Ele deve possuir apenas números, e estes números não devem seguir nenhuma ordem específica.
const numeros1 = [45,74,83,3,9]
console.log("ARRAY NÚMEROS ANTES DA ORDENAÇÃO",numeros1)

//. Imprima no console o array original, depois imprima-o ordenado em ordem crescente. 
numeros1.sort()
console.log("ARRAY NÚMEROS DEPOIS DA ORDENAÇÃO", numeros1)

//Depois, imprima-o em ordem reversa.
numeros1.reverse()
console.log("ARRAY NÚMEROS DEPOIS DA ORDENAÇÃO REVERSA", numeros1)

//3. Remova o último item do array, e em seguida, adicione o número 6.
numeros1.pop()
console.log("ARRAY NÚMEROS DEPOIS DA REMOÇÃO", numeros1)

numeros1.push(6)
console.log("ARRAY NÚMEROS DEPOIS DA ADIÇÃO", numeros1)

//Depois, remova o número que está no índice 2 do array.
numeros1.splice(2,1)
console.log("ARRAY NÚMEROS DEPOIS DA REMOÇÃO 2", numeros1)

//MÉTODOS PARA RETIRAR OU ADICIONAR NÚMEROS NÃO FUNCIONAM DENTRO DO CONSOLE.LOG

console.log(numeros1.sort()) // FUNCIONA
console.log(numeros1.push(7)) // NÃO FUNCIONA

//MÉTODOS INTRODUZIDOS POR CONSOLE.LOG SÓ IMPRIMEM A INFORMAÇÃO, NÃO ARMAZENAM
