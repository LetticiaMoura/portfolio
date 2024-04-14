
type cards = {

    title: string,
    img: string,
    description: string,
    language: string,
    onClick: () => void
}; 

function Card( {title, img, description, language, onClick } : cards) {

    return(

        <div className="flex
                        h-auto 
                        w-[50vw]
                        sm:w-[30vw]
                        md:w-[40vw]
                        md:flex
                        lg:w-[23vw]
                        lg:h-auto
                        lg:flex 
                        xl:flex
                        2xl:flex
                        justify-araund 
                        flex-wrap 
                        rounded-[20px] 
                        font-gfs-didot 
                        text-center 
                        bg-zinc-100
                        shadow-slate-500/10
                        shadow-lg
                        transition hover:-translate-y-1 hover:scale-110 duration-300">

            <div className="h-auto w-[50vw] sm:w-[30vw] md:w-[40vw]">

                <img className="h-[20vh] object-cover w-[60vw] sm:w-[40vw] md:h-[42vh] lg:h-[40vh] rounded-t-[20px] filter hover:brightness-50 brightness-85 bg-cover" src={img} alt='Photo Projects' />

                <h3 className="pt-1 text-2xl"><strong>{title}</strong></h3>

                <p className="p-1 hidden md:block">{description}</p>
                
                <p className="pb-2 w-42">{language}</p>

                <button onClick={onClick} className="border w-[8vw] p-2 rounded-lg hover:bg-slate-500/50 mb-5">View</button>

            </div>
            
        </div>

    )
}

export default Card;