
import Styles from './Navbar.module.css';

function Navbar() {

    const menuItems = [
        {
            id: 1,
            title: "HOME",
        },
        {
            id: 2,
            title: "ABOUT",
        },
        {
            id: 3,
            title: "SKILLS",
        },
        {
            id: 4,
            title: "PROJECTS",
        },
        {
            id: 5,
            title: "CONTACT",
        },
    ]

    return(

        <nav className={Styles.navbar}>

            <h1>LM <span> | </span> PORTFOLIO</h1>

            <ul>

                {menuItems.map(menu => (

                    <li> <a href={ `#${menu.title}` } > { menu.title } </a> </li>

                ))}

            </ul>

        </nav>

    )
}

export default Navbar;