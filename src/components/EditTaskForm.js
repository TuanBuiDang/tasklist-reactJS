import { useState, useEffect } from "react";
import './../App.css'
import TextInput from "./input/TextInput";
import TextInputCategory from "./input/TextInputCategory";
import DateInput from "./input/DateInput";
import StatusInput from "./input/StatusInput";

const statusOptions = ["Hoàn thiện", "Chưa hoàn thiện"];

const EditTaskForm = (props) => {
  const setTaskList = props.setTaskList;
  const currentTask = props.currentTask;
  const setCurrentTask = props.setCurrentTask;

  const reFormatDate = (date) => {
    console.log(date);
    const dateArray = date.split('/');

    let day = dateArray[0];
    let month = dateArray[1];
    let year = dateArray[2];

    if(day.length === 1) {
        day = "0" + day;
    } 
    
    if(month.length === 1) {
        month = "0" + month;
    }
    
    const newDate = year + "-" + month + "-" + day;
    console.log(newDate);

    return newDate;
  }
  
  const [taskNameEdit, setTasknameEdit] = useState(currentTask.taskName);
  const [errorTaskNameEdit, setErrorTaskNameEdit] = useState("");
  const [taskCategoryEdit, setTaskCategoryEdit] = useState(currentTask.taskCategory);
  const [errorTaskCategoryEdit, setErrorTaskCategoryEdit] = useState("");
  const [startDateInputEdit, setStartDateInputEdit] = useState(reFormatDate(currentTask.startDate));
  const [endDateInputEdit, setEndDateInputEdit] = useState(reFormatDate(currentTask.endDate));
  const [errorStartDateInputEdit, setErrorStartDateInputEdit] = useState("");
  const [errorEndDateInputEdit, setErrorEndDateInputEdit] = useState("");
  const [statusEdit, setStatusEdit] = useState(currentTask.status);

  const startDateEdit = new Date(startDateInputEdit);
  const endDateEdit = new Date(endDateInputEdit);

  useEffect(() => {
    setTasknameEdit(currentTask.taskName)
    setTaskCategoryEdit(currentTask.taskCategory)
    setStartDateInputEdit(reFormatDate(currentTask.startDate))
    setEndDateInputEdit(reFormatDate(currentTask.endDate))
    setStatusEdit(currentTask.status)
  }, [currentTask])
  
  const formatDate = (date) => {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
  }

  const handleSubmit = () => {
      let isValid = true

      if(taskNameEdit.length === 0) {
        console.log("Vui lòng nhập nội dung!");
        setErrorTaskNameEdit("Vui lòng nhập nội dung!");
        isValid = false;
      } else {
        setErrorTaskNameEdit('');
      }

      if(taskCategoryEdit.length === 0) {
          console.log("Vui lòng nhập thể loại bài tập!");
          setErrorTaskCategoryEdit("Vui lòng nhập thể loại bài tập!");
          isValid = false;
        } else {
          setErrorTaskCategoryEdit('');
        }

      if(isNaN(startDateEdit)) {
        console.log("Vui lòng nhập ngày giao!");
        setErrorStartDateInputEdit("Vui lòng nhập ngày giao!");
        isValid = false;
      } else {
        setErrorStartDateInputEdit('');
      }

      if(isNaN(endDateEdit)) {
        console.log("Vui lòng nhập ngày hoàn thiện!");
        setErrorEndDateInputEdit("Vui lòng nhập ngày hoàn thiện!");
        isValid = false;
      } else {
        setErrorEndDateInputEdit('');
      }

      if(startDateEdit > endDateEdit) {
        console.log("Ngày hoàn thiện không được trước ngày giao!");
        setErrorEndDateInputEdit("Ngày hoàn thiện không được trước ngày giao!");
        isValid = false;
      }

      if(isValid) {
        console.log(formatDate(startDateEdit));
        console.log(formatDate(endDateEdit));

        let newTask = {
          taskName: taskNameEdit,
          taskCategory: taskCategoryEdit,
          startDate: formatDate(startDateEdit),
          endDate: formatDate(endDateEdit),
          status: statusEdit
        };
        console.log(newTask);

        setTaskList(prev => prev.map(
          (task) => {
            if(task.stt === currentTask.stt) {
              return newTask;
            } else {
              return task;
            }
          }
        ))
      }
    }

  const handleCancel = () => {
    console.log("Hủy edit task");
    setCurrentTask(null);
    
  }

  return (
      <div className="edit-task-component">
          <div className="task-input-form">
            <h2 className="header-component">Sửa thông tin bài tập</h2>
            <TextInput 
              placeholder="Nội dung bài tập"
              text={taskNameEdit}
              setText={setTasknameEdit}
              errorText={errorTaskNameEdit}
            />

            <TextInputCategory
              lableName="Loại bài tập: "
              text={taskCategoryEdit}
              setText={setTaskCategoryEdit}
              errorText={errorTaskCategoryEdit}
            />

            <DateInput
              lableName="Ngày giao: "
              dateInput={startDateInputEdit}
              setDateInput={setStartDateInputEdit}
              errorDateInput={errorStartDateInputEdit}
            />
            
            <DateInput
              lableName="Ngày hoàn thiện: "
              dateInput={endDateInputEdit}
              setDateInput={setEndDateInputEdit}
              errorDateInput={errorEndDateInputEdit}
            />

            <StatusInput
              status={statusEdit}
              setStatus={setStatusEdit}
              statusList={statusOptions}
            />
            <button onClick={handleSubmit} className="btn btn-submit">Cập nhật</button>
            <button onClick={handleCancel} className="btn btn-cancel">Hủy</button>
        </div>
      </div>
    )
}

export default EditTaskForm