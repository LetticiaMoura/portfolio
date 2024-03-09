
import Curriculum from '../layout/Curriculum';

import Perfil from '../../assets/image.jpg'

function Home() {

    return(

        <div className="scroll-smooth flex flex-col-reverse space-y-20 md:space-y-0 md:flex-row items-center md:justify-around p-10 bg-pessego md:h-screen">

            <div className="h-[40vh] p-8 text-center md:text-start overflow-hidden">

                <h1 className="py-2 text-3xl md:text-4xl text-center md:text-start font-gfs-didot">Hello, my name is<br></br> <span className="font-gfs-didot text-orange text-start text-5xl md:text-7xl">Leticia Moura</span> </h1>

                <p className="text-2xl md:text-2xl md:text-start font-mono text-center lg:text-start ">I'm Frontend Developer</p>

                <button className='p-2 mt-3 text-slate-blue font-bold rounded-md border-2 border-solid border-slate-blue hover:bg-slate-gray/30 text-center'> <Curriculum /> </button>
                
            </div>

            <img className="w-auto h-[40vh] min-h-auto min-w-auto rounded-full sm:w-auto sm:h-[50vh] md:w-auto shadow-lg shadow-slate-blue/50 md:h-[50%] lg:w-auto lg:h-[70%]" src={Perfil} alt='Profile Photo'/>
            
            <div className="h-[43vh] w-[80vw] border-orange border-[15px] sm:border-[20px] pq:top-[16%] pq:h-[40vh] pq:w-[60vw] pq:border-[15px] rounded-full p-2 animate-spin absolute top-[14%] sm:h-[52vh] sm:w-[55vw] md:hidden animation-slow"></div>

            <div className="h-[43vh] w-[80vw] border-orange border-[15px] sm:border-[14px] pq:top-[16%] pq:h-[40vh] pq:w-[55vw] pq:border-[15px] rounded-full p-2 animate-spin absolute top-[14%] sm:hidden sm:h-[55vh] 
            sm:w-[55vw] md:hidden  animation-slow"></div>

            <div className="h-[50vh] w-[82vw] border-pessego border-[15px] pq:top-[14%] sm:border-[10px] filter brightness-80 pq:h-[42vh] pq:w-[45vh] pq:border-[15px] rounded-full p-2 animate-spin absolute top-[10%] sm:h-[55vh] sm:w-[57vw] md:hidden  animation-slow"></div>


        </div>

    )
}

export default Home;