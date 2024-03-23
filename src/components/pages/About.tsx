import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import my from "../../assets/my.jpeg"; 

export default function About() {
    return(
        <div className="p-10 h-auto bg-pessego">

            <div className="w-auto h-[0.1px] bg-white/70"/>

            <h1 className="p-5 text-slate-950 text-center font-gfs-didot text-4xl sm:text-5xl lg:text-4xl">About me</h1>

            <div className="w-auto h-[0.1px] bg-white/70"/>

            <div className="p-5 lg:flex lg:justify-between">

                <img src={my} alt="I'm" className="shadow-xl m-auto h-[40vh] w-[65vw] rounded-br-full md:rounded-l-full lg:rounded-xl object-cover sm:h-[50vh] md:h-[50vh] md:w-[50vw] lg:h-[50vh] lg:w-[20vw] lg:hidden"/>

                <p className="p-5 shadow-xl text-2xl text-center font-gfs-didot text-slate-950 lg:w-[80vh] m-auto lg:p-6 lg:text-2xl">Hello, I'm Letícia Moura, a 20-year-old technology enthusiast. Currently, I am focused on becoming a software developer specializing in front-end. My journey in this field is driven by my passion for innovation and technological advancements.</p>


            </div>

            <div className="p-3 m-auto w-[60vw] bg-slate-950 shadow-xl rounded-lg lg:w-[20vw]">

                <ul className="flex items-center justify-around">

                    <li>
                        <a className="text-slate-white text-4xl hover:text-orange text-center" href='https://github.com/LetticiaMoura' target="_blank"> <FaGithub /> </a>
                    </li>

                    <li>
                        <a className="text-slate-white text-4xl hover:text-orange text-center" href='https://www.linkedin.com/in/leticia-moura-2157891a6' target="_blank"> <FaLinkedin /> </a>
                    </li>

                    <li>
                        <a className="text-slate-white text-4xl hover:text-orange text-center" href='https://www.instagram.com/leticiamourah_?igsh=aGpoZHkzYWx2cDRy' target="_blank"> <FaInstagram /> </a>
                    </li>
                
                </ul>

            </div>
        </div>
    )
}