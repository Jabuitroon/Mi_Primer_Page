import logo from '../assets/logo.png'
import { DrawHover } from '../Components/DrawHover'

export function Nav() {
    return(
        <>
        <div id="logo" className="flex-grow basis-0">
            <img className=' w-24' src={logo} alt='DBZ' />
        </div>
        <nav id="nav-central">
            <ul id="btn-nav" className="flex text-sm [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-2 [&>li>a]:font-right text-inherit">
                <li><a href="#">Model A</a></li>
                <li><a href="#">Model B</a></li>
            </ul>
        </nav>
        <nav id="nav-lateral" className="flex flex-grow basis-0 justify-end">
            <ul id="btn-nav" className="flex text-sm [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-2 [&>li]:h-9">
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
        </nav>
        <DrawHover />
        </>
    )
}