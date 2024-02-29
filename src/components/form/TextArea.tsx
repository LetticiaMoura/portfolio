
type textarea = {
    text: string,
    name: string,
    placeholder: string,
    cols: number,
    rows: number,
    value: string,
    onChange: (e:any) => void;
}

const TextArea = ( { name, text, value, placeholder, cols, rows, onChange }:textarea ) => {

  return (
    
    <div>

        <label>{text}</label> <br />
        
        <textarea name={name} value={value} placeholder={placeholder} cols={cols} rows={rows} onChange={onChange}></textarea>
        
    </div>

  );
};

export default TextArea;