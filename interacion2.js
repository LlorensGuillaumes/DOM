// 1.1 Basandote en el array siguiente, crea una lista ul > li 
// dinámicamente en el html que imprima cada uno de los paises.

const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

let newUl = document.createElement('ul')
document.body.appendChild(newUl)


for (const country of countries) {
    let newLi = document.createElement('li');
    let content = document.createTextNode(country);
    newLi.appendChild(content)
    newUl.appendChild(newLi) 
}


// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.

let elementoClaseRemove = document.querySelector('.fn-remove-me')

        elementoClaseRemove.remove()
// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
// en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

let newUlCars = document.createElement('ul')
let containSelect = document.querySelector("div")

if (containSelect.getAttribute('data-function')==='printHere'){
    containSelect.appendChild(newUlCars)
    for (const car of cars) {
        let newLi = document.createElement('li')
        let content = document.createTextNode(car)        
        newLi.appendChild(content)
        newUlCars.appendChild(newLi)
    }

}


// 1.4 Crea dinamicamente en el html una lista de div que contenga un elemento 
// h4 para el titulo y otro elemento img para la imagen.
const images = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

    for (const image of images) {
        
        let newDiv = document.createElement('div')
            newDiv.setAttribute('class', 'imageContainer')
            document.body.appendChild(newDiv)

        let myTitle = document.createElement('h4')
            let content = document.createTextNode(image.title)
            let contentImage = document.createElement('img')
            contentImage.setAttribute('src',image.imgUrl)

        let OtherNewbutton = document.createElement('button')
            OtherNewbutton.innerHTML = "Eliminar Este"
            OtherNewbutton.setAttribute('id','DeleteThis')
            // OtherNewbutton.setAttribute('onclick', 'fncDeleteThis(index)')

            OtherNewbutton.addEventListener('click',fncDeleteThis )
       


        myTitle.appendChild(content)
        newDiv.appendChild(myTitle)
        newDiv.appendChild(contentImage)
        newDiv.appendChild(OtherNewbutton)
        
    }

// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
// elemento de la lista.

let myNewButton = document.createElement('button')
myNewButton.innerHTML = "Eliminar Ultimo"
myNewButton.setAttribute('id','DeleteLast')
myNewButton.setAttribute('onclick', 'fncMyNewButtonClick()')
document.body.appendChild(myNewButton)



function fncMyNewButtonClick(){
    let divs = document.querySelectorAll('.imageContainer');
    divs[divs.length-1].remove()

}

// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
// elementos de las listas que elimine ese mismo elemento del html.

// let contenedor = document.body.querySelectorAll('.imageContainer')
    
//     let OtherNewbutton = document.createElement('button')
//     OtherNewbutton.innerHTML = "Eliminar Este"
//     OtherNewbutton.setAttribute('id','DeleteThis')
//     OtherNewbutton.setAttribute('onclick', 'fncDeleteThis')
//     contenedor.appendChild('OtherNewbutton')
    
   
     function fncDeleteThis(e){
        e.target.parentElement.remove()
     }
    



