
import Curriculum from '../layout/Curriculum';

import Perfil from '../../assets/image.jpg';

//import Styles from './Home.module.css';

function Home() {

    return(

        <div className="flex flex-col-reverse space-y-20 md:space-y-0 xl:flex-row items-center md:justify-around p-8 bg-pessego md:h-screen">

            <div className='h-[40vh]'>

                <h1 className="py-2.5 text-3xl md:text-4xl font-mono text-center md:text-start font-gfs-didot">Hello, my name is <br></br> <span className="font-gfs-didot text-orange text-start text-5xl md:text-7xl font-mono"> Leticia Moura </span> </h1>

                <p className="text-2xl md:text-2xl font-mono text-center  md:text-start font-gfs-didot">I'am Frontend Developer</p>

                <button className='m-5 p-2 rounded-md hover:text-orange hover:bg-slate-gray bg-slate-800 text-center bg-slate-blue'> <Curriculum /> </button>
                
            </div>

           <img className="pt-1/5 h-2/6 md:h-96 rounded-full" src={Perfil} alt='Profile Photo'/>

        </div>

    )
}

export default Home;