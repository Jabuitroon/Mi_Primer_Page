const $header = document.querySelector("navegador")

const observerOptions = {
    root: null,
    rootMargin: '0px', //A partir de estos px que aparezca
    threshold: 0.90     //Porcentaje de visibilidad
}
// const observer = new intersectionObserver(entries=>
//     entries.forEach(entry => {
//         const { isInteresting} = entry
//             const color = entry.target.getAttribute("Atributo")

//     });
//     );