import Curriculum from '../layout/Curriculum';

import Perfil from '../../assets/image.jpg'

function Home() {

    return(

        <div className="scroll-smooth flex flex-col-reverse space-y-20 h-screen md:space-y-0 md:flex-row items-center md:justify-around p-10 bg-pessego md:h-screen">

            <div className="h-[40vh] p-10 text-center md:text-start overflow-hidden">

                <h1 className="py-2 text-3xl xl:font-medium xl:text-center md:text-4xl xl:text-5xl text-center md:text-start font-gfs-didot">Hello, my name is<br></br> <span className="xl:text-7xl xl:font-bold font-gfs-didot text-orange text-start text-5xl md:text-7xl">Leticia Moura</span> </h1>

                <p className="text-2xl md:text-2xl xl:text-center md:text-start font-mono text-center lg:text-start xl:p-5">I'm Frontend Developer</p>

                <button className='p-2 mt-3 text-slate-blue font-bold rounded-md border-2 border-solid border-slate-blue hover:bg-slate-gray/30 text-center xl:ml-40'> <Curriculum /> </button>
                
            </div>

            <div className="
            lg:top-[33%] 
            lg:left-[60%]
            lg:border-[20px] 
            lg:h-[62vh] 
            lg:w-[32vw] 

            xl:top-[27%] 
            xl:left-[57%]
            xl:border-[30px] 
            xl:h-[60vh] 
            xl:w-[32vw] 

            md:hidden

            
            absolute
            rounded-full
            bg-pessego
            border-pessego
            animate-spin-slow">
            </div>
            <div className="
            lg:top-[33%] 
            lg:left-[60%]
            lg:border-[20px] 
            lg:h-[62vh] 
            lg:w-[32vw] 

            xl:top-[26%] 
            xl:left-[56.5%]
            xl:border-[20px] 
            xl:h-[67vh] 
            xl:w-[33vw] 

            md:hidden

            absolute
            rounded-full
            border-orange
            animate-spin-fast">
            </div>
            
            <img className="w-auto h-[40vh] z-40 min-h-auto min-w-auto rounded-full sm:w-auto sm:h-[50vh] md:w-auto shadow-lg shadow-slate-blue/50 md:h-[40%] lg:w-auto lg:h-[50%] xl:w-auto xl:h-[55%]  cursor-cat" src={Perfil} alt='Profile Photo'/>
            
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