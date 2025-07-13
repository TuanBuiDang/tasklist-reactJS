import './../../App.css'

const TextInputCategory = (props) => {
    const text = props.text;
    const setText = props.setText;
    const errorText = props.errorText;
    const lableName = props.lableName;

    const handleTextChange = (event) => {
        const newText = event.target.value
        console.log(newText);

        setText(newText);
    }

    return (
        <div className="input-data-form">
            <label>
                {lableName}
            </label>
            <input
                type="text"
                value={text}
                onChange={handleTextChange}
                className="input-data input-date" 
            />
            {errorText && <p style={{color: 'red'}}>{errorText}</p>}
        </div>
    )
}

export default TextInputCategory