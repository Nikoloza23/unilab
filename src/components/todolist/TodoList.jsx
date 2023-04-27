import done from "../../assets/done.svg";
import deleted from "../../assets/delete.svg";

import "./todoList.scss";

const TodoList = () => {
  return (
    <div className="todo_list_container">
      <h1>Add Your Daily Tasks</h1>
      <div className="input_box">
        <input type="text" placeholder="my task" />
        <button>Add</button>
      </div>
      <ul className="tasks">
        <div className="todo_template">
          <div className="completed_task">
            <img src={done} alt="" />
          </div>
          <div className="delete_task">
            <img src={deleted} alt="" />
          </div>
        </div>
        <li className="added_tasks">Grocerdassada</li>
      </ul>
    </div>
  );
};

export default TodoList;
