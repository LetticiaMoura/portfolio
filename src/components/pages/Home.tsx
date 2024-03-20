import Curriculum from '../layout/Curriculum';

import Perfil from '../../assets/image.jpg'

function Home() {

    return(

        <div className="scroll-smooth focus:scroll-auto flex flex-col-reverse space-y-20 h-screen md:space-y-0 md:flex-row items-center md:justify-around p-10 bg-pessego md:h-screen">

            <div className="h-[40vh] text-center md:text-start overflow-hidden">

                <h1 className="py-2 text-3xl xl:text-center md:text-4xl xl:text-5xl xl:text-slate-950 text-center md:text-start font-gfs-didot">Hello, my name is<br></br> <span className="font-gfs-didot text-orange text-start text-5xl md:text-7xl">Leticia Moura</span> </h1>

                <p className="text-2xl md:text-2xl text-slate-blue xl:text-center md:text-start font-mono text-center lg:text-start">I'm Frontend Developer</p>

                <button className='p-2 mt-3 text-slate-blue font-bold rounded-md border-2 border-solid border-slate-blue hover:bg-slate-gray/30 text-center xl:ml-40'> <Curriculum /> </button>
                
            </div>
            
            <img className="w-auto h-[40vh] z-40 min-h-auto min-w-auto rounded-full sm:w-auto sm:h-[50vh] md:w-auto md:h-[55vh] shadow-lg shadow-slate-blue/50 lg:w-auto lg:h-[70%] xl:w-auto xl:h-[65%] cursor-cat" src={Perfil} alt='Profile Photo'/>
            
            <div className="
                h-[44vh] 
                w-[85vw]  
                rounded-full
                absolute 
                top-[14%] 
                border-orange 
                border-[22px]  

                pq:top-[14%] 
                pq:h-[45vh] 
                pq:w-[73vw] 
                pq:border-[20px]

                em:top-[15%] 
                em:h-[42vh] 
                em:w-[66vw] 
                em:border-[15px]

                sm:top-[15%] 
                sm:border-[25px] 
                sm:h-[53vh] 
                sm:w-[65vw] 

                md:hidden

                xl:top-[15%] 
                xl:left-[50%]
                xl:border-[25px] 
                xl:h-[80vh] 
                xl:w-[65vw] 

                animate-spin-slow"
                >
            </div>

            <div 
                className="
                h-[47vh] 
                w-[91vw]  
                rounded-full 
                absolute 
                top-[12%] 
                border-pessego 
                border-[15px]  

                pq:top-[16%] 
                pq:h-[35vh] 
                pq:w-[20vw] 
                pq:border-[15px]

                sm:border-[20px] 
                sm:h-[52vh] 
                sm:w-[55vw] 

                md:hidden 
                animate-spin-fast"
            ></div>

        </div>

    )
}

export default Home;