
type cards = {

    title: string,
    img: string,
    description: string,
    language: string,

}; 

function Card( {title, img, description, language} : cards) {

    return(

        <div className="flex justify-center flex-wrap rounded-[15%] bg-slate-white h-auto w-25 font-gfs-didot text-center transition hover:-translate-y-1 hover:scale-110 duration-300">

            <div className="h-[65vh]">

                <img className="h-[40vh] w-[23vw] rounded-t-[12%] bg-cover" src={img} alt='Photo Projects' />

                <h3 className="pt-2 text-2xl"><strong>{title}</strong></h3>

                <p className="p-1">{description}</p>

                <p className="p-1">{language}</p>

                <button className="p-2 text-slate-white rounded-lg bg-slate-blue"> Git hub </button>

            </div>
            
        </div>

    )
}

export default Card;