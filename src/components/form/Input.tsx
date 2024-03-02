
type inputs = {
    text: string,
    type: string,
    placeholder: string,
    name: string,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  
}

const Input = ( { text, type, placeholder, name, value, onChange }:inputs ) => {

  return (

    <div>

        <label htmlFor={name}> {text} </label> <br />
        <input  className="opacity-50 w-[80vw] sm:w-[60vw] md:w-[40vw] lg:w-[30vw] text-slate-blue p-3 border-none outline-none rounded-2xl" value={value} name={name} type={type} placeholder={placeholder} onChange={onChange}/> <br />
        

    </div>

  )
}

export default Input;