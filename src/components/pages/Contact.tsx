
import { useState } from 'react';

import Select from '../form/Select';
import Input from '../form/Input';
import TextArea from '../form/TextArea';
import Label from '../form/Label';

import gif from '../../assets/contact-us-animate.svg';

function Contact() {

    const [ dataContact, setDataContact ] = useState({
        name: '',
        email: '',
        description: '',
        options: '',
    });

    
    const handleChange = (e:any) => {
        const { name, value } = e.target;
        setDataContact({ ...dataContact, [name]: value });
    };


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
            description: '',
            options: ''
        })
        })
        .catch( (err) => console.log(err))

        alert("Mensagem Enviada!")

    };

    return(

        <div className="flex flex-wrap items-center font-gfs-didot p-10 justify-around bg-slate-blue h-auto">

            <div className="flex flex-col">

                <h1 className="p-5 items-center text-4xl text-center uppercase text-pessego transition-transform transform hover:scale-125"> <span className="text-3xl text-orange "> contact me </span> <br></br> by sending a message </h1>

                <a href="https://wa.me/5585992043834/?text=Olá, vim do seu portfolio!" target='_blank'>
                    <img className="size-full sm:h-[50vh] md:h-[35vh] lg:h-[80vh] xl:h-[80vh] opacity-50" src={gif} alt="Contact Me" />
                </a>
            </div>

            <form className="flex flex-wrap flex-col">

                <Label
                    text="Name"
                    name="name"
                />

                <Input 
                    name="name"
                    type="text"
                    placeholder="Write you name"
                    value={dataContact.name}
                    onChange={handleChange}
                />

                <Label
                    text="Email"
                    name="email"
                />

                <Input 
                    name="email"
                    type="email"
                    placeholder="Write you email"
                    value={dataContact.email}
                    onChange={handleChange}
                />

                <Label
                    text="Category"
                    name="category"
                />

                <Select
                    name="category_name"
                    value="category_name"
                    onChange={handleChange}
                />

                <Label
                    text="Description"
                    name="description"
                />

                <TextArea
                    name='description' 
                    placeholder='Write you message...'
                    value={dataContact.description}
                    onChange={handleChange}
                />
            
                <a className="w-[30vw] sm:w-[25vw] sm:ml-24 sm:p-3 ml-28 md:w-[20vw] md:ml-20 md:p-4 lg:w-[10vw] lg:p-2 lg:ml-32 p-2 text-slate-white border-2 border-solid bg-slate-blue border-orange rounded-xl text-center items-center hover:opacity-75" type='submit' href='/contact' onClick={handleSubmit}>Send</a>

            </form>

        </div>

    )
}

export default Contact;