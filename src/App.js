//Can only return one single element can't have 2 like <div> and <h2>
//If you don't want a div you can just do <>
import Header from './components/Header'
import { useState } from 'react'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

// https://reactjs.org/docs/hooks-state.html
// the only arg you should pass useState is the initial state of the variable
// in our case the tasks array
// If we want 2 different variables to be passed to useState, call useState twice
// **RETURNS** useState returns 2 things: the current state and
// a function that updates it. That's why const [tasks, setTasks] = useState(initVal)
function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appt',
      day: 'Feb 5th at 2:30pm',
      reminder: true
    },
    {
      id: 2,
      text: 'School Meeting',
      day: 'Feb 6th at 3:30pm',
      reminder: true
    },
    {
      id: 3,
      text: 'Food',
      day: 'Feb 7th at 4:30pm',
      reminder: true
    }
  ])

  // Delete Task
  // When you click the task, it has an id
  // Say you click on task with id = 1, it will return
  // a new array with all of the elements except the task
  // with id of 1
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder:!task.reminder } : task));
  }
  
  return (
    <div className='container'>
      <Header />
      <AddTask />
      {tasks.length > 0 ? 
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> 
      : 'No Tasks' }
    </div>
  );
}

export default App;
