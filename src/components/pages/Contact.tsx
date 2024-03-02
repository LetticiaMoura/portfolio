
import { useEffect, useState } from 'react';

import Select from '../form/Select';
import Input from '../form/Input';
import TextArea from '../form/TextArea';

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
        
        fetch("http://localhost:5000/contactMe", {
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

        <div className="flex flex-wrap items-center font-gfs-didot  p-10 justify-around bg-gray h-[100vh]">

            <h1 className="p-5 items-center text-center uppercase text-pessego transition-transform transform hover:scale-125"> <span className="text-2xl text-orange "> contact me </span> <br></br> by sending a message </h1>

            <form className="flex flex-wrap flex-col">

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
                    placeholder='Write you message...'
                    value={dataContact.description}
                    onChange={handleChange}
                />
            
                <a className="w-[30vw] sm:w-[25vw] sm:ml-24 sm:p-3 ml-28 md:w-[20vw] md:ml-20 md:p-4 lg:w-[10vw] lg:p-2 lg:ml-32 border-none p-2 text-slate-white bg-slate-blue rounded-2xl text-center items-center hover:opacity-75" type='submit' href='/contact' onClick={handleSubmit}>Enter</a>

            </form>

        </div>

    )
}

export default Contact;