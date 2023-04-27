import done from "../../assets/done.svg";
import deleted from "../../assets/delete.svg";

import "./todoList.scss";
import { useState } from "react";

const TodoList = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const addTask = () => {
    if (task !== "") {
      const taskDetails = {
        id: Math.floor(Math.random() * 10000),
        value: task,
        isCompleted: false,
      };
      setTaskList([...taskList, taskDetails]);
    }
  };

  const deleteTask = (e, id) => {
    e.preventDefault();
    setTaskList(taskList.filter((t) => t.id !== id));
  };

  const completedTask = (e, id) => {
    e.preventDefault();
    const element = taskList.findIndex((elem) => elem.id === id);

    const newTaskList = [...taskList];

    newTaskList[element] = {
      ...newTaskList[element],
      isCompleted: true,
    };
    setTaskList(newTaskList);
  };

  return (
    <div className="todo_list_container">
      <h1>Add Your Daily Tasks</h1>
      <div className="input_box">
        <input
          type="text"
          placeholder="my task"
          onChange={(e) => handleChange(e)}
        />
        <button onClick={addTask}>Add</button>
      </div>
      {taskList !== [] ? (
        <ul className="tasks">
          {taskList.map((t) => (
            <>
              <div className="todo_template">
                <div
                  className="completed_task"
                  onClick={(e) => completedTask(e, t.id)}
                >
                  <img src={done} alt="" />
                </div>
                <div
                  className="delete_task"
                  onClick={(e) => deleteTask(e, t.id)}
                >
                  <img src={deleted} alt="" />
                </div>
              </div>
              <li
                className={t.isCompleted ? "completed" : "added_tasks"}
                key={t.id}
              >
                {t.value}
              </li>
            </>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default TodoList;
