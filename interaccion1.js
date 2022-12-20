// 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme

let classShowme = document.querySelector('.showme')
console.log(classShowme)

// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado

let IdPillado = document.querySelector('#pillado')
console.log(IdPillado)

// 1.3 Usa querySelector para mostrar por consola todos los p

let todosLosP = document.querySelectorAll('p')
console.log(todosLosP)

// 1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon

let classPoquemon = document.querySelectorAll('.pokemon')
console.log(classPoquemon)

// 1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo 
// data-function="testMe"

let dtTestMe = document.querySelector("[data-function='testMe']")
console.log(dtTestMe)

// 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
// data-function="testMe"

let tercerAtributo = document.querySelectorAll("[data-function='testMe']")

console.log(tercerAtributo[2])





