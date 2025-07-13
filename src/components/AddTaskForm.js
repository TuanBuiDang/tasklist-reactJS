import { useState } from "react";
import './../App.css'
import TextInput from "./input/TextInput";
import DateInput from "./input/DateInput";
import TextInputCategory from "./input/TextInputCategory";

const AddTaskForm = (props) => {
  const [taskName, setTaskName] = useState("");
  const [errorTaskName, setErrorTaskName] = useState("");
  const [taskCategory, setTaskCategory] = useState("");
  const [errorTaskCategory, setErrorTaskCategory] = useState("");
  const [startDateInput, setStartDateInput] = useState("");
  const [endDateInput, setEndDateInput] = useState("");
  const [errorStartDateInput, setErrorStartDateInput] = useState("");
  const [errorEndDateInput, setErrorEndDateInput] = useState("");

  const setTaskList = props.setTaskList;

  const startDate = new Date(startDateInput);
  const endDate = new Date(endDateInput);

  const formatDate = (date) => {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
  }

  const handleSubmit = () => {
        let isValid = true

        if(taskName.length === 0) {
          console.log("Vui lòng nhập nội dung!");
          setErrorTaskName("Vui lòng nhập nội dung!");
          isValid = false;
        } else {
          setErrorTaskName('');
        }

        if(taskCategory.length === 0) {
          console.log("Vui lòng nhập thể loại bài tập!");
          setErrorTaskCategory("Vui lòng nhập thể loại bài tập!");
          isValid = false;
        } else {
          setErrorTaskCategory('');
        }

        if(isNaN(startDate)) {
          console.log("Vui lòng nhập ngày giao!");
          setErrorStartDateInput("Vui lòng nhập ngày giao!");
          isValid = false;
        } else {
          setErrorStartDateInput('');
        }

        if(isNaN(endDate)) {
          console.log("Vui lòng nhập ngày hoàn thiện!");
          setErrorEndDateInput("Vui lòng nhập ngày hoàn thiện!");
          isValid = false;
        } else {
          setErrorEndDateInput('');
        }

        if(startDate > endDate) {
          console.log("Ngày hoàn thiện không được trước ngày giao!");
          setErrorEndDateInput("Ngày hoàn thiện không được trước ngày giao!");
          isValid = false;
        }

        if(isValid) {
          console.log(formatDate(startDate));
          console.log(endDate);

          let newTask = {
            taskName: taskName,
            taskCategory: taskCategory,
            startDate: formatDate(startDate),
            endDate: formatDate(endDate),
            status: "Chưa hoàn thiện"
          };

          console.log(newTask);

          setTaskList(prev => [...prev, newTask])
        }
    }

  return (
      <div className="add-task-component">
          <div className="task-input-form">
            <h2 className="header-component">Nhập thông tin bài tập</h2>
            <TextInput 
              placeholder="Nội dung bài tập"
              text={taskName}
              setText={setTaskName}
              errorText={errorTaskName}
            />

            <TextInputCategory
              lableName="Loại bài tập: "
              text={taskCategory}
              setText={setTaskCategory}
              errorText={errorTaskCategory}
            />

            <DateInput
              lableName="Ngày giao: "
              dateInput={startDateInput}
              setDateInput={setStartDateInput}
              errorDateInput={errorStartDateInput}
            />
            
            <DateInput
              lableName="Ngày hoàn thiện: "
              dateInput={endDateInput}
              setDateInput={setEndDateInput}
              errorDateInput={errorEndDateInput}
            />

            <button onClick={handleSubmit} className="btn btn-submit">Thêm</button>
        </div>
      </div>
    )
}

export default AddTaskForm