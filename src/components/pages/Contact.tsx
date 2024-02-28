
import { useState } from 'react';
import Styles from './Contact.module.css';

function Contact() {

    const [ categories, setCategories ] = useState([]);

    fetch("http://localhost:5000/categories", {
        method: 'GET',
        headers: {
            'Content-Type': 'applicate/json',
        },
    })
    .then( (resp) => resp.json() )
    .then( (data) => {
        setCategories(data)
    })
    .catch( (err) => console.log(err))

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

                <label>Category</label>

                    <select name="" id="">
                        <option value=""></option>
                    </select>
                <label>Description</label>

                    <textarea  name='description' placeholder='Write you message...'></textarea>
            
                    <a href='/contact' onClick={handleSubmit}>Enter</a>

            </form>

        </div>

    )
}

export default Contact;