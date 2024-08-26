import { useState } from "react";

import Menu from "./Menu";

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

        <nav className="py-8 w-full md:flex flex-wrap items-center z-10 justify-around p-2 h-20 bg-pessego relative">

        <h1 className="font-gfs-didot text-black/70 text-2xl text-center font-bold opacity-90">LM <span className="text-orange"> | </span> PORTFOLIO</h1>
  
        <div className="md:hidden opacity-80 brightness-50 top-0 py-8 px-2 absolute">
            <Menu onClick={handleOpen} alt="Menu" />
        </div>

            {open && (
                <div className="flex flex-col -z-40 md:hidden justify-center items-center bg-orange/80 h-auto rounded-2xl">
                    {menuItems.map((menu) => (
                        <li key={menu.id} className="flex list-none">
                            <a onClick={() => handleOpen()} className="p-2 decoration-none text-2xl text-white" href={`#${menu.title}`}>{menu.title}</a>
                        </li>
                    ))}
                </div>
            )}



            <ul className="md:flex justify-around list-none text-center text-slate-950 hidden">

                {menuItems.map(menu => (

                    <li key={menu.id} className="hover:text-orange text-black/70 font-gfs-didot opacity-90 mr-10"> <a className="font-medium hover:underline hover:underline-offset-4 text-2xl" href={ `#${menu.title}` } > { menu.title } </a> </li>

                ))}

            </ul>
            

        </nav>

    )
}

export default Navbar;