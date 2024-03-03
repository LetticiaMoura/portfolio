
type cards = {

    title: string,
    img: string,
    description: string,
    language: string,

}; 

function Card( {title, img, description, language } : cards) {

    return(

        <div className="flex-col
                        h-auto 
                        w-[75vw]
                        sm:w-[50vw]
                        md:w-[45vw]
                        md:flex
                        lg:w-[23vw]
                        lg:h-[60vh]
                        lg:flex 
                        xl:flex
                        2xl:flex
                        justify-center 
                        flex-wrap 
                        rounded-[15%] 
                        font-gfs-didot 
                        text-center 
                        bg-slate-white 
                        transition hover:-translate-y-1 hover:scale-110 duration-300">

            <div className="h-auto w-auto">

                <img className="h-[40vh] w-[75vw] sm:w-[50vw] md:h-[42vh] lg:h-[43.5vh] rounded-t-[12%] bg-cover" src={img} alt='Photo Projects' />

                <h3 className="pt-2 text-2xl"><strong>{title}</strong></h3>

                <p className="p-1">{description}</p>

                <p className="p-1 w-42">{language}</p>

            </div>
            
        </div>

    )
}

export default Card;