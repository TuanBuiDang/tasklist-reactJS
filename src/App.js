import './App.css';
import AddTaskForm from './components/AddTaskForm';
import EditTaskForm from './components/EditTaskForm';
import TaskTable from './components/TaskTable';
import { useState, useEffect } from 'react';

let taskInfo = localStorage.getItem("taskList");
let taskArray = JSON.parse(taskInfo);
console.log(taskArray);

const saveTask = (taskArray) => {
  const taskJSON = JSON.stringify(taskArray);
  localStorage.setItem("taskList", taskJSON);
}

function App() {
  const [taskList, setTaskList] = useState(taskArray);
  const [currentTask, setCurrentTask] = useState(null);

  console.log(taskList);

  // useEffect(() => {
  //   console.log('Monitor');
  //   console.log(currentTask);
  // }, [currentTask]); // <- add the count variable here

  useEffect(() => {
    console.log('Save task');
    console.log(taskList);

    saveTask(taskList);
  }, [taskList]); // <- add the count variable here

  const deleteTask = (deleteIndex) => {
    setTaskList(prev => 
      prev.filter((element, index) => {
        return (index !== deleteIndex);
      }))

    console.log(taskList);
  }

  // let taskInfos = JSON.parse(taskArray);
  // console.log(taskInfos);

  return (
    <div className="App">
      <header className="header-introduction text-x1">
          <h1>Sổ bài tập</h1>
          <p>Người thực hiện:  Bùi Đăng Tuấn</p>
      </header>

      <div className="all-component-content container">
        <div className="content-left">
          <AddTaskForm 
            setTaskList = {setTaskList}
          />

          {currentTask && 
            <EditTaskForm 
              setTaskList = {setTaskList}
              currentTask = {currentTask}
              setCurrentTask = {setCurrentTask}
            />
          }
        </div>
        
        <div className="content-right">
          <TaskTable 
            taskList = {taskList}
            deleteTask = {deleteTask}
            setCurrentTask = {setCurrentTask}
          />
        </div>
      </div>
      
    </div>
  );
}

export default App;
