//DOM - Crear e insertar elementos

/* 
Crear un elemento: document.createElement(element)
Escribir texto en un elemento: element.textContent = texto
Escribir HTML en un elemento: element.innerHTML = código HTML
Añadir un elemento al DOM: parent.appendChild(element)
Fragmentos de código: document.createDocumentFragment()
*/
const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']

const title = document.getElementById('title')
const daysList = document.getElementById('daysList')
const selectDays = document.getElementById('daysSelect')

//...........................creo un elemento del tipo li
const itemlist= document.createElement('li')
//...........................le agrego contenido
itemlist.textContent='Lunes'
//...........................lo hago hijo de ul daylist
daysList.appendChild(itemlist)

console.log(itemlist)

//..........................si quiero agregar una etiqueta html 
title.innerHTML=`DOM - <span>Crear e insertar elementos </span>`
console.log(title)

//..........................quiero agregar los elementos del array a la ul
//..........................forma incorrecta: hacer una inyeccion por li, gasta recursos+
/*for(const day of days){
 daysList.innerHTML += `<li>${day}</li>`
*/
 //........................forma correcta de hacerlo: fragment
const fragment= document.createDocumentFragment()

 for(const day of days){
    const itemlist= document.createElement(`li`)
    itemlist.textContent= day
    fragment.appendChild(itemlist)

}

daysList.appendChild(fragment)

//.........................inserto etiquetas html 
//.........................creo el fragmento
const fragment2= document.createDocumentFragment()

//.........................recorro el array 
//.........................creo la etiqueta option
//.........................le agrego atributo value con valor day
//.........................el contenido texto sera day
//.........................lo agrego el fragmento
//.........................agrego el fragmento dentro del select
for(const day of days){
    const selectItem= document.createElement(`option`)
    selectItem.setAttribute(`value`,day.toLowerCase())
    selectItem.textContent= day
    fragment2.appendChild(selectItem)
}

selectDays.appendChild(fragment2)

console.log(selectDays)


