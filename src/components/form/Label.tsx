
type labels = {
    text: string,
    name: string
}
const Label = ({ name, text }:labels) => {
  return (
    <div>

        <label className="text-xl text-gray-white opacity-50" htmlFor={name}> {text} </label> <br />

    </div>
  )
}

export default Label