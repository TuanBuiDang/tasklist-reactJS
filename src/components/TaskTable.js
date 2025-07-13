import './../App.css';
import './TaskRow.js';
import TaskRow from './TaskRow.js';


const TaskTable = (props) => {
    const taskList = props.taskList;
    const deleteTask = props.deleteTask;
    const setCurrentTask = props.setCurrentTask;

    console.log(taskList);

    return (
        <div className="task-table-component">
            <table className="task-table">
                <thead className="thead-task">
                    <tr>
                        <th>STT</th>
                        <th>Tên bài tập</th>
                        <th>Loại bài tập</th>
                        <th>Ngày giao</th>
                        <th>Ngày hoàn thiện</th>
                        <th>Trạng thái</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className="tbody-task">
                    {
                        taskList.map((task, index) => 
                        {
                            task.stt = index + 1;
                            return <TaskRow 
                                        task={task}
                                        deleteTask={deleteTask}
                                        setCurrentTask={setCurrentTask}
                                    />
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TaskTable