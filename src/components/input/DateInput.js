import './../../App.css'

const DateInput = (props) => {
    const dateInput = props.dateInput;
    const setDateInput  = props.setDateInput;
    const errorDateInput = props.errorDateInput;
    const lableName = props.lableName;

    const handleDateChange = (event) => {
        const newDate = event.target.value;
        console.log(newDate);

        setDateInput(newDate);
    }

    return (
        <div>
            <div className="input-data-form">
                <lable>
                    {lableName}
                </lable>
                <input
                    type="date"
                    value={dateInput}
                    onChange={handleDateChange}
                    className="input-data input-date" 
                />
                {errorDateInput && <p style={{color: 'red'}}>{errorDateInput}</p>}
            </div>
        </div>
    )
}

export default DateInput;