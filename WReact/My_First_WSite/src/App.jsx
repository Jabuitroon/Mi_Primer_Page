import { Nav } from './Components/BarNav.jsx'
import { Sections } from './Components/Sections.jsx'
import { DrawHover } from './Components/DrawHover.jsx'

import bg from '../src/assets/carro-bg.jpeg'
import '../style.css'
import { useEffect, useMemo, useRef, useState } from 'react'

export function App () {

    return(
    <>
    <header id="navegador" className={`flex w-full fixed top-0 py-1 px-3 justify-between z-40 ${ myElementIsVisible ? 'text-black': 'text-[#EC0101]' }`}>
        <Nav />
    </header>
    <section id="secciondebg" className="relative w-full h-screen overflow-auto snap-y snap-mandatory">
        <Sections id={"section-bg"} color={"bg-[#F1F3DE]"}/>
        <Sections id={"section-bg2"}/>
            <div  ref={myref} className='flex flex-wrap justify-center'>
                <div className="h-screen w-screen object-cover object-center">
                    <img src={bg} alt="Rojo" />    
                </div>
                <div id="wrapper" className="absolute z-30">
                </div>
            </div>
    </section>
    </>
    )
}
