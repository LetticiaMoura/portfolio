
import Styles from './Contact.module.css';

function Contact() {

    const handleSubmit = () => {

        alert('Dados Enviados!!')

    }

    return(

        <div className={Styles.container}>

            <h1> <span> contact me </span> <br></br> by sending a message </h1>

            <form>
                    
                <label>Name</label>

                    <input id='name' name='name' type='text' placeholder='Write you name'/> 

                <label>Email Address</label>

                    <input name='email' type='email' placeholder='Write you email'/> 

                <label>Description</label>

                    <textarea  name='description' placeholder='Write you message...'></textarea>
                
                    <a href='/contact' onClick={handleSubmit}>Enter</a>

            </form>

        </div>

    )
}

export default Contact;