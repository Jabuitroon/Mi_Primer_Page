let logo = document.getElementById('logo')
window.addEventListener('load',myAnim)

function myAnim() {
    
}
//Sobra del nav
const $listItem = document.querySelectorAll('#navegador li')
const $cajita = document.querySelector('#cajita')
    $listItem.forEach((item) => {
        item.addEventListener("mouseenter", () =>{
            const {left,top, width, height} = item.getBoundingClientRect()
                $cajita.style.setProperty("--left", `${left}px`)
                $cajita.style.setProperty("--top", `${top}px`)
                $cajita.style.setProperty("--width", `${width}px`)
                $cajita.style.setProperty("--height", `${height}px`)
                $cajita.style.opacity = "1"
                $cajita.style.visibility = "visible"                      
            })
            item.addEventListener("mouseleave",() =>{
                $cajita.style.opacity = "0"
                $cajita.style.visibility = "hidden"  
            })
});

const observerOptions = {
    root: null,
    rootMargin: '0px',  //A partir de estos px que aparezca
    threshold: 0.50     //Porcentaje de visibilidad
}

const $container = document.querySelector("#navegador")
let cody = document.querySelector('#section-bg2') // Lo que se verá después

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry) => {
        const { isIntersecting } = entry
        if (isIntersecting) {
            const color = entry.target.getAttribute("data-color")
            $container.style.color = color
        } else {
            $container.style.color = "#EC0101"
        }
    })
}, observerOptions);

observer.observe(cody)

//Ubicando proyectos

let $wrapper = document.getElementById('wrapper')
let myEjems = {
    'calendar.png' : 'Un calendario',
    'calc.png' : 'calculadora',
    'torre.png' : 'torre',
    'logo.png' : 'torre',
    'campo.jpg' : 'torre',
}

const fragments = document.createDocumentFragment(); //Fragment evita la recarga de la page tantas veces segun los li totales
console.log(fragments)
crearlista()

function crearlista() {
    let ul = document.createElement('ul')
    ul.setAttribute("class","grid-list")    

    for (const ejercicio in myEjems) {
        let name = myEjems[ejercicio]
        let optili;
        optili = 
            `<li class="iterpo">
                <a href="#" class="screen">
                    <div class="bar">
                        <h2>${name}</h2>
                    </div>
                    <picture class="img">
                        <img src="assets/${ejercicio}">
                    </picture>
                </a>
            </li>`
        ul.innerHTML += optili
    }
fragments.appendChild(ul)
}
$wrapper.appendChild(fragments)