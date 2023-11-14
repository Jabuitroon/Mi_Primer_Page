import { useState, useEffect} from 'react'

export function DrawHover() {
    
    const [pos,setPos] = useState({left:0, top:0, width:0, height:0})
    console.log('elpos', pos.left)

    const $listItem = document.querySelectorAll('#navegador li')
    const $cajita = document.querySelector('#cajita')
    console.log($cajita)

    
        $listItem.forEach((item) => {
            item.addEventListener("mouseenter", () =>{
                const {left, top, width, height} = item.getBoundingClientRect()
                console.log(item.getBoundingClientRect())
                    setPos({left:`${left}px`, top:`${top}px`, width:`${width}px`, height:`${height}px`})
                    $cajita.style.opacity = "1"
                    $cajita.style.visibility = "visible"                      
                })
                item.addEventListener("mouseleave",() =>{
                    $cajita.style.opacity = "0"
                    $cajita.style.visibility = "hidden"  
                })
    })

return (
    <>
    <div id="cajita" className={`absolute backdrop-blur-lg rounded translate-x-[var(${pos.left})] translate-y-[var(${pos.top})] left-0 top-0 w-[var(${pos.width})] h-[var(${pos.height})] transition-all duration-300 ease-in-out z-50 bg-zinc-300`}></div>
    </>
    )
}