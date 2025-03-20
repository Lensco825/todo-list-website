import { useState } from "react";


function TasksContainer() {
  const [info, setInfo] = useState('');
  const [tasks, setTask] = useState([]);

  return (
    <>
      <div className="tasksContainer">
      {tasks.map(task => (
          <div className="task">
          <input type="checkbox"/>
          <label>{task.info}</label>
          </div>
        ))}
      </div>
      {/* <div className="notasks">
        <img src="assets/sun.png" alt="sun" />
        <p>Start your day off productively with a task!</p>
      </div> */}
      <form>
        <input type="text" placeholder="Bit of a placeholder..." name="taskInput" id="taskInput" onChange={e => setInfo(e.target.value)}/>
        <label for="#taskInput" className="taskEnterBtn" onClick={() => {
          setTask([...tasks, {info: info}])
        }}><ion-icon name="send"></ion-icon></label>
        <label for="#taskInput" className="tagBtn"><ion-icon name="pricetag-outline"></ion-icon></label>
      </form>
    </>
  );

}

export default TasksContainer;
