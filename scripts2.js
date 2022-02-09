//...............................................Objeto evento
const myform= document.getElementById('myform')
const myinput= document.getElementById('myinput')
const mybutton= document.getElementById('mybutton')

//.......................envio el evento como parametro para poder usarlo: e
/*
myinput.addEventListener('keyup', (e) =>{
    console.log(e);
})

myinput.addEventListener('keyup', (e) =>{
    console.log(e.key);
})
//.......................busco en el arbol el valor que necesito(en console en el navegador)
myinput.addEventListener('keyup', (e) =>{
    console.log(e.target.attributes[0].nodeValue);
})
*/

//......................agrego un evento sobre Windows, el objeto padre es Windows
/*
addEventListener('click', (e)=>{
    console.log(e)
})
*/

//....................sobre la propiedad target del evento
/*mybutton.addEventListener('click', (e)=>{
    console.log(e)
})
*/
//....................quiero saber sobre cual elemento se hizo click
//....................pongo el listener sobre el contenedor padre de todos
/*const gallery= addEventListener('click', (e)=>{
    console.log(e.target.textContent)
    e.target.classList.add('red')
 
})
*/
//..............................preventDefault() evita que se ejecute al accion predeterminada de un evento+
//..........................si no quiero que un formulario se envie
myform.addEventListener('submit',(e)=>{
    e.preventDefault()
    console.log('no envio el formulario')
})

const myLink= document.getElementById('link')

myLink.addEventListener('click', (e)=>{
    e.preventDefault()
    console.log('no voy al link')
})