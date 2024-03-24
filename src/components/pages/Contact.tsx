
import { useState } from 'react';

import Select from '../form/Select';
import Input from '../form/Input';
import TextArea from '../form/TextArea';
import Label from '../form/Label';

import gif from '../../assets/contact-us-animate.svg';

import emailJs from "@emailjs/browser";

import Alert from '@mui/material/Alert';

function Contact() {

    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ options, setOptions ] = useState('')
    const [ message, setMessage ] = useState('');

    const [ showSucessAlert, setShowSucessAlert ] = useState(false);
    const [ showErrAlert, setShowErrAlert ] = useState(false);

    const handleSubmit = (e: any) => {
        
        e.preventDefault()

        const templateParams = {
            from_name: name,
            message: message,
            email: email,
            categories: options
        }

        emailJs.send("service_6ulrbuk", "template_tqyzpsw", templateParams, "pvvrG8V9WRrvrsTVQ")
        .then( (response) => {

            setShowSucessAlert(true);

            console.log(response)
            
            setName('')
            setEmail('')
            setOptions('')
            setMessage('')
        })
        .catch((err) => {
            setShowErrAlert(true);
            <Alert severity="error">Erro ao enviar, tente novamente!</Alert>
            console.log("Erro ao enviar: ", err)
        })
        
    };

    return(

        <div className="flex flex-wrap items-center font-gfs-didot p-10 justify-around bg-slate-blue h-auto">

            <div className="flex flex-col">

                <h1 className="p-5 items-center font-gfs-didot text-4xl text-center uppercase text-pessego transition-transform transform hover:scale-125"> <span className="text-3xl text-orange "> contact me </span> <br></br> by sending a message </h1>

                <img className="size-full sm:h-[50vh] md:h-[35vh] lg:h-[80vh] xl:h-[80vh]" src={gif} alt="Contact Me" />

            </div>

            <form className="flex flex-wrap flex-col">

                <Label
                    text="Name"
                    name="name"
                />

                <Input 
                    name="name"
                    type="text"
                    placeholder="Write your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <Label
                    text="Email"
                    name="email"
                />

                <Input 
                    name="email"
                    type="email"
                    placeholder="Write your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <Label
                    text="Category"
                    name="category"
                />

                <Select
                    name="category_name"
                    value={options}
                    onChange={(e) => setOptions(e.target.value)}
                />

                <Label
                    text="Description"
                    name="description"
                />

                <TextArea
                    name='description' 
                    placeholder='Write your message...'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
            
                <a 
                type='submit' 
                href="/contact"
                onClick={handleSubmit}
                className="w-[30vw] sm:w-[25vw] sm:ml-24 sm:p-3 ml-24 md:w-[20vw] md:ml-20 md:p-4 lg:w-[10vw] lg:p-2 lg:ml-32 p-2 text-orange border-2 border-solid bg-slate-blue border-orange rounded-xl text-center items-center hover:bg-gray/25" 
                >
                Send
                </a>

            </form>

            {showSucessAlert && (
                <Alert severity="success" onClose={() => setShowSucessAlert(false)} className='lg:z-50'> Email Enviado!!!</Alert>
            )}
            {showErrAlert && (
                <Alert severity="error" onClose={() => setShowErrAlert(false)}>Erro ao enviar, tente novamente!</Alert>
            )}


        </div>

    )
}

export default Contact;