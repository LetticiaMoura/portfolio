
import Card from '../projects/Card';

import jogo from '../../assets/jogo_da_velha.png';
import notes from '../../assets/notes.png';
import site from '../../assets/website1.jpeg'

import { Modal } from '@mui/material';
import { useState } from 'react';

function Projects() {

    const [ open, setOpen ] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () =>  setOpen(false);

    const [ openJogo, setOpenJogo ] = useState(false);
    const handleOpenJogo = () => setOpenJogo(true);
    const handleCloseJogo = () =>  setOpenJogo(false);

    const [ openAda, setOpenAda ] = useState(false);
    const handleOpenAda = () => setOpenAda(true);
    const handleCloseAda = () =>  setOpenAda(false);


    return(

        <div className="h-auto bg-pessego font-gfs-didot p-10">

            <h1 className="text-4xl text-center font-gfs-didot p-5 text-slate-blue ">My Projects</h1>

            {/*<h1 className="text-4xl text-center bg-slate-blue text-pessego h-15 p-3 rounded-md">Projects</h1>
            */}
            <div className="flex justify-around gap-11 flex-wrap p-10 pb-10">

            <div className="md:block lg:block xl:block cursor-pointer" >
                    
                <Card 
                    title='Notes'
                    img={notes}
                    description='Responsive Notepad'
                    language='React | Typescript | Tailwind'
                    onClick={handleOpenAda}
                />
                
                <Modal
                    open={openAda}
                    onClose={handleCloseAda} 
                >
                    <iframe src="https://letticiamoura.github.io/NotesLM/" className='m-auto h-[100vh] w-[80vw] object-cover rounded-xl' onClick={handleCloseAda}></iframe>
                </Modal>
                
            </div>


            <div className="md:block lg:block xl:block cursor-pointer">
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
                    <iframe src="https://github.com/letticiamoura/JogoDaVelha" className='m-auto h-[100vh] w-[80vw] object-cover rounded-xl' onClick={handleCloseJogo}></iframe>
                </Modal>
                
            </div>

            <div className="md:block lg:block xl:block cursor-pointer" >
                    
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
                    <iframe src="https://letticiamoura.github.io/Page-Makeup/" className='m-auto h-[100vh] w-[80vw] object-cover rounded-xl' onClick={handleClose}></iframe>
                </Modal>
                
            </div>

        </div>

        </div>

    )
}

export default Projects;