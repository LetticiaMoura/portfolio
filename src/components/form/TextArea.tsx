
type textarea = {
    text: string,
    name: string,
    placeholder: string,
    value: string,
    onChange: (e:any) => void;
}

const TextArea = ( { name, text, value, placeholder, onChange }:textarea ) => {

  return (
    
    <div>

        <label>{text}</label> <br />
        
        <textarea className="opacity-50 w-[80vw] sm:w-[60vw] md:w-[40vw] lg:w-[30vw] p-2 text-slate-blue h-[40vh] outline-none mb-11 rounded-2xl" name={name} value={value} placeholder={placeholder} onChange={onChange}></textarea>
        
    </div>

  );
};

export default TextArea;