

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

    return(

        <nav className="py-8 flex flex-wrap items-center justify-around p-2 h-20 bg-pessego">

            <h1 className="font-gfs-didot text-2xl font-bold opacity-90">LM <span className="text-orange"> | </span> PORTFOLIO</h1>

            <ul className="md:flex justify-around list-none text-center text-slate-950 hidden">

                {menuItems.map(menu => (

                    <li className="hover:text-orange font-gfs-didot opacity-90 mr-10"> <a className="font-medium hover:underline hover:underline-offset-4 text-2xl	" href={ `#${menu.title}` } > { menu.title } </a> </li>

                ))}

            </ul>
            

        </nav>

    )
}

export default Navbar;