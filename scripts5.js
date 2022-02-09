/*
Insertar y eliminar elementos II
    parent.insertBefore(newElement, referenceElement) - 
    Insertar un elemento antes del elemento de referencia
    SOPORTE TOTAL
    parent.insertAdjacentElement(position, element)
    parent.insertAdjacentHTML(position, HTML)
    parent.insertAdjacentText(position, text)
    positions: 
        beforebegin - Antes de que empiece (hermano anterior)
        afterbegin - después de que empiece (primer hijo)
        beforeend - antes de que acabe (último hijo)
        afterend - después de que acabe (hermano siguiente)
    parent.replaceChild(newChild, oldChild) - Reemplaza un hijo por otro
*/

const list = document.getElementById('list')
const newElement = document.createElement('li')
newElement.textContent = "new element one"

//...............el elemento se coloca antes del children[1]
//list.insertBefore(newElement, list.children[0])

//...............lo inserto como primero de la lista
//list.children[0].insertAdjacentElement('beforebegin',newElement)

//...............como primer o ultimo hijo
// list.insertAdjacentElement('afterbegin',newElement)
 //list.insertAdjacentElement('beforeend',newElement)
//list.children[1].insertAdjacentElement('afterend',newElement)

//...............agrega HTML o texto
// list.children[1].insertAdjacentHTML('afterend', '<li>Elemento con HTML</li>')
// list.children[1].insertAdjacentText('afterend', '<li>Elemento con HTML</li>')

//reemplazar un hijo con otro
//list.replaceChild(newElement,list.children[0])



/*
    DOM manipulation convenience methods - JQuery Like
    https://caniuse.com/#search=jQuery-like
    positions:
        parent.before() - Antes de que empiece (hermano anterior)
        parent.prepend() - después de que empiece (primer hijo)
        parent.append() - antes de que acabe (último hijo)
        parent.after() - después de que acabe (hermano siguiente) 
        child.replaceWith(newChild)
*/
//............hermano anterior
//list.before(newElement)
//............dentro de la lista
//list.children[0].before(newElement)
//............despues de que empiece
//list.prepend(newElement)
//............antes de que acabe 
// list.append(newElement)
//............hermano siguiente
//list.after(newElement)
//............ultimo de la lista
//list.children[1].after(newElement)

//............reemplazo un elemento por otro
//document.getElementById('child-to-replace').replaceWith(newElement)

/*
    Clonar y eliminar elementos
        element.cloneNode(true|false) - Clona el nodo. Si le pasamos true clona todo el elemento con los hijos, si le pasamos false clona solo el elemento sin hijos
        element.remove() - Elimina el nodo del DOM
        element.removeChild(child) - Elimina el nodo hijo del DOM
*/
//...............despues de la lista ponemos una copia de la lista
//...............hacerlo con elementos que no tienen id
//list.after(list.cloneNode(true))

//...............elimino el nodo del dom
//list.remove()

//..............elimino un hijo
//list.removeChild(list.children[1])