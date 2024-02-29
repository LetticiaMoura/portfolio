
type inputs = {
    text: string,
    type: string,
    placeholder: string,
    name: string,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  
}

const Input = ( { text, type, placeholder, name, value, onChange }:inputs ) => {
/*
  console.log("text " + text)
  console.log("type " + type)
  console.log("placeholder " + placeholder)
  console.log("name " + name)
  console.log("value " + value)
  console.log("onChange " + onChange)
*/
  return (

    <div>

        <label htmlFor={name}> {text} </label> <br />
        <input value={value} name={name} type={type} placeholder={placeholder} onChange={onChange}/> <br />
        

    </div>

  )
}

export default Input;