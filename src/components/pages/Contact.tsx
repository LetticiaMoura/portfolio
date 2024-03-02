
import { useEffect, useState } from 'react';

import Select from '../form/Select';
import Input from '../form/Input';
import TextArea from '../form/TextArea';

import Styles from './Contact.module.css';

function Contact() {

    const [ categories, setCategories ] = useState([]);

    const [ dataContact, setDataContact ] = useState({
        name: '',
        email: '',
        description: ''
    });

    
    const handleChange = (e:any) => {
        const { name, value } = e.target;
        setDataContact({ ...dataContact, [name]: value });
    };

    useEffect( () => {
        
    fetch("http://localhost:5000/categories", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then( (resp) => resp.json() )
    .then( (data) => {
        setCategories(data)
    })
    .catch( (err) => console.log(err))

    }, []);


    const handleSubmit = (e: any) => {
        e.preventDefault()
        
        fetch("https://letticiamoura.github.io/api-portfolio:api-contactMe.json", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataContact)
        })
        .then( (resp) => resp.json() )
        .then( (data) => {
            setDataContact(data)
            
            setDataContact({
            name: '',
            email: '',
            description: ''
        })
        })
        .catch( (err) => console.log(err))

        alert("Mensagem Enviada!")

    };

    return(

        <div className={Styles.container}>

            <h1> <span> contact me </span> <br></br> by sending a message </h1>

            <form>

                <Input 
                    text="Name"
                    name="name"
                    type="text"
                    placeholder="Write you name"
                    value={dataContact.name}
                    onChange={handleChange}
                />

                <Input 
                    text="E-mail"
                    name="email"
                    type="email"
                    placeholder="Write you email"
                    value={dataContact.email}
                    onChange={handleChange}
                />

                <Select
                    text="Category"
                    value='Category_id'
                    name="category_name"
                    options={categories}
                    onChange={handleChange}
                />

                <TextArea
                    text='Description'
                    name='description' 
                    rows={10}
                    cols={38}
                    placeholder='Write you message...'
                    value={dataContact.description}
                    onChange={handleChange}
                />
            
                <a type='submit' href='/contact' onClick={handleSubmit}>Enter</a>

            </form>

        </div>

    )
}

export default Contact;