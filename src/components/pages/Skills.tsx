import 'devicon/devicon.min.css';

function Skills() {

    return(

        <div className="p-16 h-auto bg-slate-950">

            <h1 className="text-center text-4xl font-bold rounded-t-full"> 
                <span className="text-pessego bg-slate-blue p-4">Stacks</span> 
            </h1>
            
            <div className="flex flex-wrap p-[10px] lg:p-5 md:p-[40px] justify-center items-center">

                <div className='flex justify-around w-fit sm:w-[70%] p-10 lg:p-6'>
                    <i className="devicon-html5-plain-wordmark text-pessego p-3 text-[5em] md:text-[6em] box-border hover:text-[#ff5c0a] transition hover:-translate-y-2 hover:scale-125 duration-400"></i>

                    <i className="devicon-css3-plain-wordmark text-pessego text-[4em] md:text-[6em] hover:text-blue-600 p-[10px] box-border 
                    transition hover:-translate-y-2 hover:scale-125 duration-400"></i>

                    <i className="devicon-tailwindcss-plain-wordmark text-pessego text-[5em] md:text-[6em] hover:text-blue-500 p-[10px] box-border 
                    transition hover:-translate-y-2 hover:scale-125 duration-400"></i>
                </div>

                <div className='flex justify-around w-fit sm:w-[70%] p-10 lg:p-6'>
                    <i className="devicon-javascript-plain text-pessego text-[4em] md:text-[5em] hover:text-yellow-400 p-[10px] box-border 
                    transition hover:-translate-y-2 hover:scale-125 duration-400"></i>

                    <i className="devicon-react-original-wordmark text-pessego text-[4em] md:text-[5em] hover:text-cyan-400 p-[10px] box-border 
                    transition hover:-translate-y-2 hover:scale-125 duration-400"></i>
                    
                    <i className="devicon-java-plain-wordmark text-pessego text-[5em] md:text-[6em] hover:text-red-600 p-[10px] box-border 
                    transition hover:-translate-y-2 hover:scale-125 duration-400"></i>
                </div>
                
                <div className='flex justify-around w-fit sm:w-[70%] p-10 lg:p-6'>
                    <i className="devicon-postgresql-plain-wordmark text-pessego text-[5em] md:text-[6em] hover:text-white p-[10px] box-border 
                    transition hover:-translate-y-2 hover:scale-125 duration-400"></i>

                    <i className="devicon-git-plain-wordmark text-pessego text-[5em] md:text-[6em] hover:text-orange p-[10px] box-border 
                    transition hover:-translate-y-2 hover:scale-125 duration-400"></i>
            
                    <i className="devicon-github-original-wordmark text-pessego text-[5em] md:text-[6em]  hover:text-black p-[10px] box-border 
                    transition hover:-translate-y-2 hover:scale-125 duration-400"></i>
                </div>
          
            </div>

        </div>

    )
}

export default Skills;