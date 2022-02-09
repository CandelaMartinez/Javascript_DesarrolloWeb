
//--------------------------accedo al elemento con id title y accedo al texto dentro

//const title= document.getElementById('title')
//title.textContent= 'DOM - accediendo a nodos'


//..........................accedo al elemento del tipo selector .paragraph, 
//..........................dentro accedo al elemento del tipo span y su contenido en texto

/*const paragraph = document.querySelector('.paragraph')

const span= paragraph.querySelector("span")

console.log(span.textContent)

const span2= document.getElementById('title').querySelector('span')
console.log(span2.textContent)*/

//..........................accedo a todos los selectores .paragraph en una lista de NodeLis

/*const paragraphs= document.querySelectorAll('.paragraph')
console.log(paragraphs)*/

//.........................convierto un NodeList en un array
/*const paragraphSpread= [...document.querySelectorAll('.paragraph')]

const paragraphArray= Array.from(document.querySelectorAll('.paragraph'))

paragraphArray.map(p=>console.log(p.children))*/

//..........................accedo al elemento con id title y name
//const title= document.getElementById('title')
//const names= document.getElementById('name')

//............................accedo a los atributos de name

//console.log(names.getAttribute('type'))

//............................hago que el atributo type sea del tipo date
//names.setAttribute('type','date')
//console.log(names)

//............................agrego una clase
//title.classList.add('main-title')


//............................quito una clase
//title.classList.remove('main-title')

//............................veo si el elemento title contiene una clase main-title
/*if(title.classList.contains('main-title')) console.log('Title tiene la clase main-title')
else console.log('title no tiene la clase main-title')*/

//............................reemplazo la clase title por la clase other
//title.classList.replace('title','other')

//console.log(title)
//console.log(names)

//............................imprimo el html del elemento title
//console.log(title.innerHTML)

//...........................imprimo el contenido de texto del elemento title
//console.log(title.textContent)

//...........................imprimo el valor de value del elemento name
//console.log(names.value)

//...........................eventos de raton:
const button= document.getElementById('button')

const box= document.getElementById('box')

/*button.addEventListener('click', () =>{
    console.log('hiciste un CLICK')
})*/

/*button.addEventListener('dblclick', ()=>{
    console.log('hiciste un doble')
})*/

//............no es la forma correcta de cambiar de color, se hace por clases
/*box.addEventListener('mouseenter',()=>{
    box.style.background="green"
})
box.addEventListener('mouseleave',()=>{
    box.style.background="red"
})*/

//............esta es la forma correcta, se crean las clases en css primero
/*box.addEventListener('mouseenter',()=>{
    box.classList.replace('red','green')
})
box.addEventListener('mouseleave',()=>{
    box.classList.replace('green','red')
})

box.addEventListener('mousedown', () => {
    console.log('haz pulsado en el box')
})

box.addEventListener('mouseup', () => {
    console.log('haz soltado en el box')
})

box.addEventListener('mousemove', () => {
    console.log('haz movido en el box')
})
*/
//...........................eventos de teclado
const inputed= document.getElementById('inputed')
console.log(inputed)

inputed.addEventListener('keydown', ()=>{
    console.log('has pulsado una tecla')
})

inputed.addEventListener('keyup', ()=>{
    console.log('has soltado una tecla')
})

inputed.addEventListener('keypress', ()=>{
    console.log('estas pulsando una tecla')
})