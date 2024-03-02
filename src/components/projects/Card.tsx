
type cards = {

    title: string,
    img: string,
    description: string,
    language: string,

}; 

function Card( {title, img, description, language } : cards) {

    return(

        <div className="flex-col sm:h-[50vh] sm:w-[55vw] w-[80vw] lg:w-[25vw] md:flex lg:flex xl:flex lg:h-[68vh] md:w-[40vw] md:h-[54vh] justify-center flex-wrap rounded-[15%] bg-slate-white h-auto md:w-25 font-gfs-didot text-center transition hover:-translate-y-1 hover:scale-110 duration-300">

            <div className="h-[50vh] md:h-[54vh]  lg:h-[68vh] xl:h-[68vh]">

                <img className="h-[30vh] md:h-[35vh] lg:h-[40vh] xl:h-[40vh] md:w-[50vw] lg:w-[30vw] xl:w-[30vw] rounded-t-[12%] bg-cover" src={img} alt='Photo Projects' />

                <h3 className="pt-2 text-2xl"><strong>{title}</strong></h3>

                <p className="p-1">{description}</p>

                <p className="p-1">{language}</p>

            </div>
            
        </div>

    )
}

export default Card;