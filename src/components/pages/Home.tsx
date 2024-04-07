import Curriculum from '../layout/Curriculum';

import GitHubIcon from '@mui/icons-material/GitHub';

import { useTypewriter, Cursor } from "react-simple-typewriter";

import Perfil from '../../assets/my.jpeg'

function Home() {

    const [ text ] = useTypewriter({
        words: ["I'm Frontend Developer"],
        loop: true,
        typeSpeed: 120,
        deleteSpeed: 100
    });

    return(

        <div className="scroll-smooth focus:scroll-auto flex flex-col-reverse space-y-20 h-screen md:space-y-0 md:flex-row items-center md:justify-around p-10 bg-pessego md:h-screen">

            <div className="h-[40vh] text-center md:text-start overflow-hidden">

                <h1 className="pt-7 py-2 text-3xl md:text-4xl xl:text-5xl xl:text-slate-950 text-center md:text-start font-gfs-didot">Hello, my name is<br></br> <span className="font-gfs-didot text-orange text-start text-5xl md:text-7xl">Leticia Moura</span> </h1>


                <p className='text-xl font-medium text-slate-950 font-gfs-didot'>
                    <span>
                        {" "} 
                        {text} 
                    </span>
                    <span className="font-bold">
                        <Cursor cursorColor='#020617' />
                    </span>
                </p>

                <div className='flex gap-5'>
                    <button className='p-2 mt-3 w-42 text-slate-blue font-bold rounded-md border-2 border-solid border-slate-blue hover:bg-slate-gray/30 text-center'> <Curriculum /> </button>
                    <a href="https://github.com/letticiamoura" className='p-2 mt-3 w-40 text-slate-blue font-bold rounded-md border-2 border-solid border-slate-blue hover:bg-slate cc-gray/30 text-center'><GitHubIcon sx={{ marginRight: '0.5rem' }} />GitHub</a>
                </div>
                            
            </div>
            
            <img className="h-[38vh] w-[70vw] object-cover rounded-full z-40 border-[8px] border-pessego/50 pq:h-[40vh] pq:w-[65vw] em:h-[50vh] em:w-auto md:h-[50vh] md:w-auto lg:h-[55vh] lg:w-[40vw] xl:h-[62vh] xl:w-auto 2xl:h-[70vh] 2xl:w-[37vw]" src={Perfil} alt='Profile Photo'/>
            
            <div className="
                h-[40vh] 
                w-[75vw]  
                rounded-full
                absolute 
                top-[16%] 
                border-orange 
                border-[20px]  

                pq:top-[16%] 
                pq:h-[40vh] 
                pq:w-[70vw] 
                pq:border-[20px]

                em:top-[15%] 
                em:h-[51vh] 
                em:w-[70vw] 
                em:border-[15px]

                sm:top-[15%] 
                sm:border-[30px] 
                sm:h-[57vh] 
                sm:w-[57vw] 

                md:hidden

                xl:top-[15%] 
                xl:left-[50%]
                xl:border-[25px] 
                xl:h-[80vh] 
                xl:w-[65vw] 

                animate-spin-slow"
                >
            </div>

            <div className="
                hidden
                h-[44vh] 
                w-[79vw]  
                rounded-full 
                absolute 
                top-[14%] 
                border-pessego
                border-[8px]  

                pq:top-[15%] 
                pq:h-[42vh] 
                pq:w-[70vw] 
                pq:border-[5px]

                em:top-[15%] 
                em:border-[5px] 
                em:h-[42vh] 
                em:w-[60vw] 

                sm:top-[14.5%] 
                sm:border-[5px] 
                sm:h-[54vh] 
                sm:w-[63vw] 

                md:hidden 
                animate-spin-fast"
            ></div>        

        </div>

    )
}

export default Home;