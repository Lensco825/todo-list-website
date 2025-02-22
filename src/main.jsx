import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './Navbar.jsx'
import TasksContainer from './tasksContainer.jsx'
import TaskInput from './taskInput.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <TasksContainer />
    <TaskInput />
  </StrictMode>,
)
