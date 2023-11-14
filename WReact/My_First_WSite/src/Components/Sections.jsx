import { useObserver } from './Hooks/customHooks.js'
export function Sections( {id, className, color}){

    const myref = useRef()
    const { myElementIsVisible } = useObserver({ myref })
    return(
        <>
        <section id="sect" className="w-full h-screen text-center overflow-hidden relative snap-center">
            <div id={id} className="flex justify-center" ref={myref}>
                <div id="intro-bg" className="justify-center z-10 relative pt-40 items-center">
                    <pre id="output"></pre>
                    <h2 className="">About Me</h2>
                    <p>Aquí encontrarás más información ecerca de mi, lo que hago y mis habilidades en programación</p>
                </div>
            </div>
            <div className="follow-me absolute z-50">
            <ul>
                <li><a className="github item" target="_blank" href="https://github.com/Jabuitroon" title="Follow on GitHub">
                    <span className="bg-[url('assets/github.png')]">Follow on Github</span></a>
                </li>
                <li><a className="lk item" target="_blank" href="https://torre.co/s/ztG8cQ8deh" title="Connect on Torre">
                    <span className="bg-[url('assets/torre.png')]">Connect on Linkedin</span></a>
                </li>
                <li><a className="fb item" target="_blank" href="#" title="Follow on Facebook">
                    <span className="bg-[url('assets/')]">Follow on Facebook</span></a>
                </li>
            </ul>
        </div>
        </section>
        </>
    )
}