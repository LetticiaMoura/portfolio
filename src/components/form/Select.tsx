
type selects = {
    name: string,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select = ({ value, name, onChange }: selects) => {
  
    const categories = [
      { id: 1, value: "Dica" },
      { id: 2, value: "Dúvida" },
      { id: 3, value: "Interesse" }
    ]

  return (

    <div>

      <select
        name={name}
        id={name}
        onChange={onChange}
        className="opacity-50 text-slate-blue w-[80vw] sm:w-[60vw] md:w-[40vw] lg:w-[30vw] p-2 border-none outline-none rounded-2xl relative" 
      >

          <option value={value}>Selecione uma opção: </option>
        {categories.map( (categories: any) => (
          <option value={categories.id} key={categories.id}> {categories.value} </option>
        ))}
      </select>

    </div>
    
  )
}

export default Select;