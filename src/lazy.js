const isIntersecting = (entry) => {
    return entry.isIntersecting //true si es que esta dentro del view port (lo que ve el usuario)
}

const loadImage = (entry) => {
    const container = entry.target
    const image = container.firstChild //no hay que buscar, sabemos que es l primer elemento 
    loads++

    image.src = image.dataset.src
    
    
     //podemos ver de mejor manera lo que está pasando
    // console.log(container.containerName);


    // img.src = `https://randomfox.ca/images/${random()}.jpg`
    //metodo 1 

    //des registra la imagen (unlistend)
    observer.unobserve(container) //metodo de objeto
}

const observer = new IntersectionObserver((entries) => { //looks to the viewport
    entries.filter(isIntersecting).forEach(loadImage)
})

export let loads = 0

export const registerImage = (image) => {
    observer.observe(image);
}

 