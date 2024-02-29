
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

        <label htmlFor={name}> {text} </label> <br />

        <select value={value} name={name} id={value} onChange={onChange}> <br />

            <option>Selecione uma opção: </option>

            {options.map( (option: any) => (
                <option value={option.name} key={option.id}>{option.name} </option>
            ) )}

        </select>

    </div>
    
  )
}

export default Select;