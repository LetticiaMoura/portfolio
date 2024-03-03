
type textarea = {
    name: string,
    placeholder: string,
    value: string,
    onChange: (e:any) => void;
}

const TextArea = ( { name, value, placeholder, onChange }:textarea ) => {

  return (
    
    <div>
        
        <textarea className="opacity-80 w-[80vw] sm:w-[60vw] md:w-[40vw] lg:w-[30vw] p-2 text-slate-blue h-[40vh] outline-none mb-5 rounded-md" name={name} value={value} placeholder={placeholder} onChange={onChange}></textarea>
        
    </div>

  );
};

export default TextArea;