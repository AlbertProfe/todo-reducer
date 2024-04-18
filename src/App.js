import { useReducer } from 'react';
import AddTask from './AddTask.js';
import TaskList from './TaskList.js';
import tasksReducer from './tasksReducer.js';
import initialTasks from './initialToDos.js'




export default function TaskApp() {

  let nextId = initialTasks.length;
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  function handleAddTask(text) {
    dispatch({
      type: 'ADD',
      id: nextId++,
      text: text,
    });
  }

  function handleChangeTask(task) {
    dispatch({
      type: 'COMPLETE',
      task: task,
    });
  }

  function handleDeleteTask(taskId) {
    dispatch({
      type: 'DELETE',
      id: taskId,
    });
  }

  return (
    <>
      <h1>DevOps RoadMap</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}


