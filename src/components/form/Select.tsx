
type selects = {
    text: string,
    name: string,
    options: string,
    value: () => void,
    handleOnChange: () => void,
}
const Select = ({text, name, options, handleOnChange, value}: selects) => {
  return (
    <div>
        <label htmlFor={name}>{text}</label>
        <select name={name} id={name}></select>
        <option>Selecione uma opção</option>
    </div>
  )
}

export default Select