
import Curriculum from '../layout/Curriculum';

import Perfil from '../../assets/image.jpg';

import Styles from './Home.module.css';

function Home() {

    return(

        <div className={Styles.container}>

            <div>

                <h1>Hello, my name is <br></br> <span> Leticia Moura </span> </h1>

                <p>I'am Frontend Developer</p>

                <button> <Curriculum /> </button>
                
            </div>

           <img className={Styles.perfil} src={Perfil} alt='Perfil Photo'/>

        </div>

    )
}

export default Home;