
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

import Styles from './Footer.module.css';

function Footer() {

    return(

        <footer className={Styles.footer}>

            <ul>

                <li>
                    <a href='https://github.com/LetticiaMoura'> <FaGithub /> </a>
                </li>

                <li>
                    
                    <a href='https://www.linkedin.com/in/leticia-moura-2157891a6'> <FaLinkedin /> </a>

                </li>

                <li>

                    <a href='https://www.instagram.com/leticiamourah_?igsh=aGpoZHkzYWx2cDRy'> <FaInstagram /> </a>

                </li>
                
            </ul>

            <p className={Styles.copy_right} > <span> Leticia Moura </span> &copy; 2024</p>

        </footer>
            
    )
}

export default Footer;