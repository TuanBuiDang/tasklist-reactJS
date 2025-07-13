

const TaskRow = (props) => {
    const task = props.task;
    const deleteTask = props.deleteTask;
    const setCurrentTask = props.setCurrentTask;

    const deleteCurrentTask = () => {
        deleteTask(task.stt - 1)
    }

    const displayEditTaskForm = () => {
        console.log(`Sửa task`);
        console.log(task);
        
        setCurrentTask(task);
    }

    return (
        <tr>
            <td>{task.stt}</td>
            <td>{task.taskName}</td>
            <td>{task.taskCategory}</td>
            <td>{task.startDate}</td>
            <td>{task.endDate}</td>
            <td>{task.status}</td>
            <td><i class="fa-solid fa-pen icon-button" onClick={displayEditTaskForm}></i></td>
            <td><i class="fa-solid fa-trash icon-button" onClick={deleteCurrentTask}></i></td>
        </tr>
    )
}

export default TaskRow