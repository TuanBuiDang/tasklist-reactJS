import './../../App.css'

const StatusInput = (props) => {
    const status = props.status;
    const setStatus = props.setStatus;
    const statusList = props.statusList;

    const handleStatusChange = (event) => {
        const newStatus = event.target.value;
        console.log(newStatus);

        setStatus(newStatus);
    }

    return (
        <div>
            <div className="input-data-form">
            {
                statusList.map(option => {
                    return  (
                        <span style={{marginRight: '5px'}}>
                            <input
                                type="radio"
                                onChange={handleStatusChange}
                                value={option}
                                checked={option === status}
                            />
                            {option}
                        </span>
                    )
                })
            }
            </div>
            
        </div>
    )
}

export default StatusInput;