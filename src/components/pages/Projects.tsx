
import Card from '../projects/Card';

import jogo from '../../assets/jogo_da_velha.png';
import ponto from '../../assets/notas.jpg';
import site from '../../assets/website1.jpeg'

function Projects() {

    return(

        <div className="h-auto bg-pessego font-gfs-didot p-10">

            <h1 className="text-3xl text-center bg-slate-blue text-pessego h-12 p-2"> PROJECTS</h1>

            <div className="flex justify-around gap-11 flex-wrap p-10 pb-10">

            <Card 
                title='Time Tracking App'
                img={ponto}
                description='Digital Time Tracking App'
                language='React Native'
            />
             <Card 
                title='Tic Tac Toe'
                img={jogo}
                description='Simple tic tac toe'
                language='HTML | CSS | Javascript'
            />

             <Card 
                title='Home Page Makeup'
                img={site}
                description='makeup showcase'
                language='HTML | CSS'
            />

            </div>

        </div>

    )
}

export default Projects;