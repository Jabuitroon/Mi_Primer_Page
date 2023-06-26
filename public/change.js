const observerOptions = {
    root: null,
    rootMargin: '0px',  //A partir de estos px que aparezca
    threshold: 0.50     //Porcentaje de visibilidad
}

const $container = document.querySelector(".navegador")
let cody = document.querySelector('.section-bg2') // Lo que se verá después

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