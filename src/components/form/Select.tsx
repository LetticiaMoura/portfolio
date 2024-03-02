
type selects = {
    text: string,
    name: string,
    value: string,
    options: { id: string, name: string }[],
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select = ({text, name, options, value, onChange }: selects) => {
    
  return (

    <div>

        <label className="p-10 opacity-50 text-slate-white" htmlFor={name}> {text} </label> <br />

        <select className="opacity-50 w-[80vw] sm:w-[60vw] md:w-[40vw] lg:w-[30vw] p-3.5 border-none outline-none rounded-2xl relative" value={value} name={name} id={value} onChange={onChange}> <br />

            <option>Selecione uma opção: </option>

            {options.map( (option: any) => (
                <option value={option.name} key={option.id}> {option.name} </option>
            ) )}

        </select>

    </div>
    
  )
}

export default Select;