
import Curriculum from '../layout/Curriculum';

import Perfil from '../../assets/image.jpg';

function Home() {

    return(

        <div className="flex flex-col-reverse space-y-20 md:space-y-0 md:flex-row items-center md:justify-around p-10 bg-pessego md:h-screen">

            <div className="h-[40vh] p-8 text-center md:text-start">

                <h1 className="py-2 text-3xl md:text-4xl font-mono text-center md:text-start font-gfs-didot">Hello, my name is <br></br> <span className="font-gfs-didot text-orange text-start text-5xl md:text-7xl font-mono">Leticia Moura </span> </h1>

                <p className="text-2xl md:text-2xl md:text-start font-mono text-center lg:text-start font-gfs-didot">I'am Frontend Developer</p>

                <button className='p-2 mt-3 text-slate-blue font-bold rounded-md border-2 border-solid border-slate-blue hover:text-orange hover:bg-slate-gray/80 hover:border-none text-center'> <Curriculum /> </button>
                
            </div>

           <img className="rounded-e-full sm:w-[80vw] md:w-[100%] pt-1/5 shadow-lg shadow-slate-blue/50 h-2/6 md:h-[50%] lg:w-auto lg:h-[70%]  sm:rounded-full md:rounded-full lg:rounded-full xl:rounded-full" src={Perfil} alt='Profile Photo'/>

        </div>

    )
}

export default Home;