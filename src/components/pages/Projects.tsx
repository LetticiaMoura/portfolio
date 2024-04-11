
import Card from '../projects/Card';

import jogo from '../../assets/jogo_da_velha.png';
import notes from '../../assets/notes.png';
import site from '../../assets/website1.jpeg'
import secretWord from "../../assets/secretWord.png";
import clinica from "../../assets/clinica.png";

import { Modal } from '@mui/material';
import { useState } from 'react';

function Projects() {

    const [ open, setOpen ] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () =>  setOpen(false);

    const [ openJogo, setOpenJogo ] = useState(false);
    const handleOpenJogo = () => setOpenJogo(true);
    const handleCloseJogo = () =>  setOpenJogo(false);

    const [ openNote, setOpenNote ] = useState(false);
    const handleOpenNote = () => setOpenNote(true);
    const handleCloseNote = () =>  setOpenNote(false);

    const [ openSecret, setOpenSecret ] = useState(false);
    const handleOpenSecret = () => setOpenSecret(true);
    const handleCloseSecret = () =>  setOpenSecret(false);
    
    const [ openClinica, setOpenClinica ] = useState(false);
    const handleOpenClinica = () => setOpenClinica(true);
    const handleCloseClinica = () =>  setOpenClinica(false);


    return(

        <div className="h-[85vh] md:h-auto bg-pessego font-gfs-didot p-10">

            <h1 className="text-4xl text-center font-gfs-didot p-5 text-slate-blue ">My Projects</h1>

            {/*<h1 className="text-4xl text-center bg-slate-blue text-pessego h-15 p-3 rounded-md">Projects</h1>
            */}
            <div className="flex justify-around gap-11 p-10 pb-10 overflow-x-scroll scroll-smooth  scrollbar-thin scrollbar-thumb-gray/50 scrollbar-track-pessego">

            <div className="flex-shrink-0 md:block lg:block xl:block cursor-pointer" >
                    
                <Card 
                    title='Notes'
                    img={notes}
                    description='Responsive Notepad'
                    language='React | Typescript | Tailwind'
                    onClick={handleOpenNote}
                />
                
                <Modal
                    open={openNote}
                    onClose={handleCloseNote} 
                >
                    <iframe src="https://letticiamoura.github.io/NotesLM/" className='pt-10 m-auto h-[95vh] w-[85vw] object-cover rounded-2xl' onClick={handleCloseNote}></iframe>
                </Modal>
                
            </div>      

            <div className="flex-shrink-0 md:block lg:block xl:block cursor-pointer" >
                    
                <Card 
                    title='Clinica'
                    img={clinica}
                    description='Web system for booking appointments'
                    language='React | Tailwind'
                    onClick={handleOpenClinica}
                />
                
                <Modal
                    open={openClinica}
                    onClose={handleCloseClinica}
                >
                    <iframe src="https://letticiamoura.github.io/clinica/" className='pt-10 m-auto h-[95vh] w-[85vw] object-cover rounded-2xl'  onClick={handleClose}></iframe>
                </Modal>
                
            </div>

            {/**            OK          */}
            <div className="flex-shrink-0 md:block lg:block xl:block cursor-pointer" >
                    
                <Card 
                    title='Secret Word'
                    img={secretWord}
                    description='Secret Word'
                    language='React | Tailwind'
                    onClick={handleOpenSecret}
                />
                
                <Modal
                    open={openSecret}
                    onClose={handleCloseSecret} 
                >
                    <iframe src="https://letticiamoura.github.io/secretWord/" className='pt-10 m-auto h-[95vh] w-[85vw] object-cover rounded-2xl' onClick={handleClose}></iframe>
                </Modal>
                
            </div>

            {/**            OK          */}
            <div className="flex-shrink-0 md:block lg:block xl:block cursor-pointer">
                <Card
                    title='Tic Tac Toe'
                    img={jogo}
                    description='Simple tic tac toe'
                    language='HTML | CSS | Javascript'
                    onClick={handleOpenJogo}
                />
                
                <Modal
                    open={openJogo}
                    onClose={handleCloseJogo} 
                >
                <iframe src="https://letticiamoura.github.io/JogoDaVelha/" className='pt-10 m-auto h-[95vh] w-[85vw] object-cover rounded-2xl' onClick={handleCloseJogo}></iframe>
                </Modal>
                
            </div>

            {/**            OK          */}
            <div className="flex-shrink-0 md:block lg:block xl:block cursor-pointer" >
                    
                <Card 
                    title='Home Page Makeup'
                    img={site}
                    description='makeup showcase'
                    language='HTML | CSS'
                    onClick={handleOpen}
                />
                
                <Modal
                    open={open}
                    onClose={handleClose} 
                >
                <iframe src="https://letticiamoura.github.io/Page-Makeup/" className='pt-10 m-auto h-[95vh] w-[85vw] object-cover rounded-2xl' onClick={handleClose}></iframe>
                </Modal>
                
            </div>

        </div>

        </div>

    )
}

export default Projects;