
import Card from '../projects/Card';

import jogo from '../../assets/jogo_da_velha.png';
import ponto from '../../assets/notas.jpg';
import site from '../../assets/website1.jpeg'

import Styles from './Projects.module.css';

function Projects() {

    return(

        <div className={Styles.container}>

            <h1> <span>   PROJECTS    </span></h1>

            <div className={Styles.col_card}>

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