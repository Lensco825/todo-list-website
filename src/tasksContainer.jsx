import { useState } from "react";


function TasksContainer() {
  const [info, setInfo] = useState('');
  const [tasks, setTask] = useState([]);

  return (
    <>

    <div className="taskInputContainer">
    <h2>Good morning</h2>
    <p>Here are your tasks for today</p>
      <form>
        <input type="text" placeholder="Bit of a placeholder..." name="taskInput" id="taskInput" onChange={e => setInfo(e.target.value)}/>
        <label for="#taskInput" className="taskEnterBtn" onClick={() => {
          setTask([...tasks, {info: info}])
        }}><ion-icon name="send"></ion-icon></label>
      </form>
        </div>

      <div className="tasksContainer">
      {tasks.map(task => (
          <div className="task">
          <input type="checkbox"/>
          <label>{task.info}</label>
          </div>
        ))}
      </div>

    </>
  );

}

export default TasksContainer;
