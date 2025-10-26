import { useState } from "react";


function removeTask(el) {
  el.style.backgroundColor = "red";
  task.pop(el);
  document.getElementsByClassName('tasksContainer').removeChild(el);
}

function TasksContainer() {
  const [info, setInfo] = useState('');
  const [tasks, setTask] = useState([]);

  return (
    <>

    <div className="taskInputContainer">
    <h2>Hello!</h2>
    <p>Here are your tasks for today</p>
      <form>
        <input type="text" minLength="3" maxLength="96" placeholder="Bit of a placeholder..." name="taskInput" id="taskInput" onChange={e => setInfo(e.target.value)}/>
        <label for="#taskInput" className="taskEnterBtn" onClick={() => {
          setTask([...tasks, {info: info}])
          document.querySelector('#taskInput').value = "";        
          }}><ion-icon name="send"></ion-icon></label>
      </form>
        </div>

      <div className="tasksContainer">
      {tasks.map(task => (
          <div className="task">
          <div className="textHalf">
          <input type="checkbox"/>
          <label>{task.info}</label>
          </div>
          <ion-icon class="deleteBtn" name="trash-outline" onClick={() => {
            document.querySelector('.task').remove()
          }}></ion-icon>
          </div>
        ))}
      </div>

    </>
  );

}

export default TasksContainer;
