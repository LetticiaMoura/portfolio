
import Card from '../projects/Card';

import jogo from '../../assets/jogo_da_velha.png';
import ponto from '../../assets/notas.jpg';
import site from '../../assets/website1.jpeg'

function Projects() {

    return(

        <div className="h-auto bg-pessego font-gfs-didot p-10">

            <h1 className="text-3xl text-center bg-slate-blue text-pessego h-15 p-3 rounded-md uppercase">Projects</h1>

            <div className="flex justify-around gap-11 flex-wrap p-10 pb-10">
                
                <div>
                    <a href="https://github.com/letticiamoura/ada"  target="_blank">
                        <Card 
                            title='Time Tracking App'
                            img={ponto}
                            description='Digital Time Tracking App'
                            language='React Native'
                        />
                    </a>

                    <a className="p-3 mt-8 ml-10 w-[70%] transition duration-100 ease-out animate-spin text-xl hover:bg-slate-blue/45 text-slate-blue font-bold text-center border-4 border-slate-blue block md:hidden lg:hidden xl:hidden">View</a>

                </div>

                <div className="hidden md:block lg:block xl:block">
                    <a href="https://github.com/letticiamoura/JogoDaVelha"  target="_blank">
                        <Card 
                            title='Tic Tac Toe'
                            img={jogo}
                            description='Simple tic tac toe'
                            language='HTML | CSS | Javascript'
                        />
                    </a>
                </div>

                <div className="hidden md:block lg:block xl:block">
                    <a href="https://github.com/letticiamoura/Page-Makeup" target="_blank">
                        <Card 
                            title='Home Page Makeup'
                            img={site}
                            description='makeup showcase'
                            language='HTML | CSS'
                        />
                    </a>
                </div>

            </div>

        </div>

    )
}

export default Projects;