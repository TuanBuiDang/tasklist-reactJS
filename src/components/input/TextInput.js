import './../../App.css'

const TextInput = (props) => {
    const placeholder = props.placeholder;
    const text = props.text;
    const setText = props.setText;
    const errorText = props.errorText;

    const handleTextChange = (event) => {
        const newText = event.target.value
        console.log(newText);

        setText(newText);
    }

    return (
        <div className="input-data-form">
            <textarea 
                rows="4" cols="50" 
                value={text} 
                onChange={handleTextChange} 
                className="input-data input-task-name" 
                placeholder={placeholder}></textarea>
            {errorText && <p style={{color: 'red'}}>{errorText}</p>}
        </div>
    )
}

export default TextInput