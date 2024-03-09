
type cards = {

    title: string,
    img: string,
    description: string,
    language: string,

}; 

function Card( {title, img, description, language } : cards) {

    return(

        <div className="flex
                        h-auto 
                        w-[50vw]
                        sm:w-[30vw]
                        md:w-[40vw]
                        md:flex
                        lg:w-[23vw]
                        lg:h-[60vh]
                        lg:flex 
                        xl:flex
                        2xl:flex
                        justify-araund 
                        flex-wrap 
                        rounded-[15%] 
                        font-gfs-didot 
                        text-center 
                        bg-zinc-100
                        transition hover:-translate-y-1 hover:scale-110 duration-300">

            <div className="h-auto w-[50vw] sm:w-[30vw] md:w-[40vw]">

                <img className="h-[20vh] w-[60vw] sm:w-[40vw] md:h-[42vh] lg:h-[43.5vh] rounded-t-[12%] filter hover:brightness-50 brightness-85 bg-cover" src={img} alt='Photo Projects' />

                <h3 className="pt-2 text-2xl"><strong>{title}</strong></h3>

                <p className="p-1 hidden md:block">{description}</p>
                
                <p className="pb-5 w-42">{language}</p>

            </div>
            
        </div>

    )
}

export default Card;