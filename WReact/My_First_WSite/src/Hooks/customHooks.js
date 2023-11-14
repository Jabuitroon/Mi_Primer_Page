import { useState, useEffect } from "react";

export function useObserver({ myref }) { //Elparámetro que permite que un componente que esté empleando este hook pueda establecer elementos a observar

    //Creamos un estado que va almacenar los elementos que vamos a observar
    const [ myElementIsVisible, setMyElementIsVisible ] = useState(false)

    useEffect(()=>{
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.50
        }
        //console.log('Quiero el valor actual de esa referencia', myref.current)
        const observer = new IntersectionObserver((entries)=>{
            const entry = entries[0] // console.log('entry', entry)
            setMyElementIsVisible(entry.isIntersecting) // console.log('El estado indefinido', myElementIsVisible)
        }, observerOptions)
        observer.observe(myref.current)
    }, [])
    
    return { myElementIsVisible }
}