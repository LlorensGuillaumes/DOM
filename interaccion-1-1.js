// 2.1 Inserta dinamicamente en un html un div vacio con javascript.

let newDiv = document.createElement('div')
document.body.appendChild(newDiv)

// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
let newDiv2 = document.createElement('div')
let newP = document.createElement('p')

newDiv2.appendChild(newP)
document.body.appendChild(newDiv2)

// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

let newDiv3 = document.createElement('div')

for (let i=0; i<6; i++){
    let p2 = document.createElement('p')
    newDiv3.appendChild(p2)

}
document.body.appendChild(newDiv3)

// 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

let newP3 = document.createElement('p')
    //textContent, innerText, textContent
    newP3.textContent = 'Soy dinamico'

    document.body.appendChild(newP3)
    

// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

let newH2 = document.querySelector('h2.fn-insert-here')
newH2.textContent='Wubba Lubba dub dub'


// 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

let ul2 = document.createElement('ul')

for (const app of apps) {
    let li2 = document.createElement('li')
    li2.textContent=app

    ul2.appendChild(li2)    
}

document.body.appendChild(ul2)

// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

let nodosClassFn = document.querySelectorAll('.fn-remove-me')

for (const nodo of nodosClassFn) {
    nodo.remove()    
}

// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
// 	Recuerda que no solo puedes insertar elementos con .appendChild.
let otherP = document.createElement('p')
otherP.textContent='Voy en medio!'

let difs = document.querySelectorAll('div')

// va delante de la poscion 1 de difs

document.body.insertBefore(otherP, difs[1] )

// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

let difs2 = document.querySelectorAll('.fn-insert-here')

for (const div2 of difs2) {
    let otherP2 = documment.createElement('p')
    otherP2.textContent='Voy dentro!'
    div2.appendChild(otherP2)
    
}

