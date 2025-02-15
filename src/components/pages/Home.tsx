import Curriculum from "../layout/Curriculum";

import GitHubIcon from "@mui/icons-material/GitHub";

import { useTypewriter, Cursor } from "react-simple-typewriter";

import Perfil from "../../assets/let.png";

function Home() {

    const [ text ] = useTypewriter({
        words: ["I'm Frontend Developer"],
        loop: true,
        typeSpeed: 120,
        deleteSpeed: 100
    });

    return(

        <div className="scroll-smooth focus:scroll-auto flex flex-col-reverse space-y-20 h-auto md:h-screen md:space-y-0 md:flex-row items-center md:justify-around md:p-10 bg-pessego">
            <div className="h-[50vh] text-center md:text-start overflow-hidden">

                <h1 className="pt-7 py-2 text-3xl md:text-4xl xl:text-4xl xl:text-slate-950 text-center md:text-start font-gfs-didot">Hello, my name is<br></br> <span className="font-gfs-didot text-orange-dark text-start text-5xl md:text-6xl">Leticia Moura</span> </h1>

                <p className="md:w-[35vw] font-gfs-didot font-medium">This is my portfolio with some informations about me. Here you are find my stacks, some projects and my social medias.</p>

                <p className='text-xl font-medium text-slate-950 font-gfs-didot'>
                    <span>
                        {" "} 
                        {text} 
                    </span>
                    <span className="font-bold">
                        <Cursor cursorColor='#020617' />
                    </span>
                </p>

                <div className='flex justify-center items-center gap-5 p-1'>

                    <button className='p-2 mt-3 w-42 text-slate-blue font-bold rounded-md border-2 border-solid border-slate-blue hover:border-orange-dark hover:bg-orange/10 text-center transition hover:scale-105'> <Curriculum /> </button>

                    <a href="https://github.com/letticiamoura" target="_blank" className='p-2 mt-3 w-36 sm:w-40 text-slate-blue font-bold rounded-md border-2 border-solid border-slate-blue hover:border-orange-dark hover:bg-orange/10 text-center transition hover:scale-105'><GitHubIcon sx={{ marginRight: '0.5rem' }} />GitHub</a>

                </div>
                            
            </div>
            
            <img className="h-[38vh] w-auto hover:bg-orange-dark bg-orange hover:transition-colors duration-300 hover:scale-105 object-cover rounded-t-full rounded-bl-full z-0 pq:h-[40vh] em:h-[50vh] md:h-[50vh] lg:h-[55vh] xl:h-[58vh] 2xl:h-[70vh] shadow-slate-900/50 shadow-xl" src={Perfil} alt='Profile Photo'/>

        </div>

    )
}

export default Home;