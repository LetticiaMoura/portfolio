
import Styles from './Card.module.css';

type cards = {

    title: string,
    img: string,
    description: string,
    language: string,

}; 

function Card( {title, img, description, language} : cards) {

    return(

        <div className={Styles.container}>

            <div className={Styles.card}>

                <img src={img} alt='Photo Projects' />

                <h3>{title}</h3>

                <p>{description}</p>

                <p className={Styles.language_text}>

                <span className={ `${Styles[language.toLowerCase()]} `} > </span> {language}

            </p>

                <button> Git hub </button>

            </div>
            

        </div>

    )
}

export default Card;