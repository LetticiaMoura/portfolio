import { useState } from "react";

import menu from "../../assets/menu.png";

function Navbar() {

    const menuItems = [
        {
            id: 1,
            title: "HOME",
        },
        {
            id: 2,
            title: "SKILLS",
        },
        {
            id: 3,
            title: "PROJECTS",
        },
        {
            id: 4,
            title: "CONTACT",
        },
    ]
    
    const [ open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open)
    };

    return(

        <nav className="py-8 w-full flex flex-wrap items-center -z-0 justify-around p-2 h-20 bg-pessego relative">
            
            <button onClick={handleOpen} className="md:hidden absolute left-[3%] top-[10%]">
                <img src={menu} alt="Menu" />

                {open &&

                    menuItems.map((menu) => (
                        <li key={menu.id} className="decoration-none">
                            <a className="decoration-none" href={`#${menu.title}`}>{menu.title}</a>
                        </li>
                    ))
                
                }
                
            </button>

            <h1 className="font-gfs-didot text-black/70 text-2xl font-bold opacity-90">LM <span className="text-orange"> | </span> PORTFOLIO</h1>

            <ul className="md:flex justify-around list-none text-center text-slate-950 hidden">

                {menuItems.map(menu => (

                    <li key={menu.id} className="hover:text-orange text-black/70 font-gfs-didot opacity-90 mr-10"> <a className="font-medium hover:underline hover:underline-offset-4 text-2xlt" href={ `#${menu.title}` } > { menu.title } </a> </li>

                ))}

            </ul>
            

        </nav>

    )
}

export default Navbar;