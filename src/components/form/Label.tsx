
type labels = {
    text: string,
    name: string
}
const Label = ({ name, text }:labels) => {
  return (
    <div>

        <label className="text-lg fon text-gray-white opacity-50" htmlFor={name}> {text} </label>

    </div>
  )
}

export default Label