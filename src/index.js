/*selector de imagen random
    generador de imagen en un div
        cada vez que halla un click aremos una imagen nueva
            agregamos la imagen al HTML

*/
import { registerImage, loads } from "./lazy.js";


const min = 1
const max = 122

const random = () => Math.floor(Math.random() * (max - min)) + min


//si colocara la url fuera de la funcion daria la misma imagen siempre
const createImage = () => {
    const container = document.createElement('div')
    const img = document.createElement('img')
    img.className = "the_image"
    img.dataset.src = `https://randomfox.ca/images/${random()}.jpg`

    adds++
    container.appendChild(img)
    return container
}
//const no causa problemas porque se 'destruye'


const addButton = document.getElementById('the_button')
const deleteButton = document.getElementById('other_button')

const imagenes = document.getElementById('imagenes')

const addImage = () => {
    const newImage = createImage() 
    imagenes.append(newImage)
    registerImage(newImage) //la agregamos al lazy loading y la empieza a escuchar 

    console.log(`las loads ${loads}, las adds ${adds}, las deletes ${deletes}`);

}


let adds = 0
let deletes = 0


const deleteImage = () => {
    imagenes.removeChild(imagenes.lastChild)
    deletes++
    console.log(`las loads ${loads}, las adds ${adds}, las deletes ${deletes}`);
}

addButton.addEventListener('click', addImage)
deleteButton.addEventListener('click', deleteImage)

