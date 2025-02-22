import {useState} from 'react'

function TasksContainer() {
  const [fill, setFill] = useState('empty');
  if (fill === 'empty') {
    return (
      <>
        <div className="tasksContainer notasks">
          <img src="assets/sun.png" alt="sun"/>
          <p>Start your day off productively with a task!</p>
        </div>
      </>
    );
  }
  else {
   return <h1>hello</h1>;
  }

}

export default TasksContainer;
