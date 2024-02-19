
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

function Footer() {

    return(

        <footer className="bg-pessego text-slate-white p-8 text-center relative left-0 bottom-0">

            <ul className="flex  justify-center list-none">

                <li>
                    <a className="text-slate-white text-3xl hover:text-orange mr-16 text-center" href='https://github.com/LetticiaMoura'> <FaGithub /> </a>
                </li>

                <li>
                    
                    <a className="text-slate-white text-3xl hover:text-orange mr-16 text-center" href='https://www.linkedin.com/in/leticia-moura-2157891a6'> <FaLinkedin /> </a>

                </li>

                <li>

                    <a className="text-slate-white text-3xl hover:text-orange mr-12 text-center" href='https://www.instagram.com/leticiamourah_?igsh=aGpoZHkzYWx2cDRy'> <FaInstagram /> </a>

                </li>
                
            </ul>

            <p className="mt-2 text-2xl"> <span className="font-weight"> Leticia Moura </span> <span className=" text-orange"> &copy; </span>2024</p>

        </footer>
            
    )
}

export default Footer;