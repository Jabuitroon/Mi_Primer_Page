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
            const {clientHeight, clientWidth} = item
            console.log({left,top, width, height})
            console.log({clientHeight, clientWidth})
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
    console.log(entries)
    entries.forEach((entry) => {
        const { isIntersecting } = entry
        console.log(isIntersecting)
        if (isIntersecting) {
            const color = entry.target.getAttribute("data-color")
            console.log(color)
            $container.style.color = color
        } else {
            $container.style.color = "white"
        }
    })
}, observerOptions);

observer.observe(cody)
