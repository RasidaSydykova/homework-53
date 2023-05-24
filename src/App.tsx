import React, {useState} from 'react';
import AddTaskForm from "./AddTaskForm/AddTaskForm";
import Task from "./Task/Task";
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([
    {text: 'Buy milk', id: (Math.floor(Math.random() * (200 - 100 + 1)) + 100).toString(16)},
    {text: 'Walk with dog', id: (Math.floor(Math.random() * (200 - 100 + 1)) + 100).toString(16)},
    {text: 'Do homework', id: (Math.floor(Math.random() * (200 - 100 + 1)) + 100).toString(16)},
  ]);

  const [input, setInput] = useState("");

  const changeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const addTodo = () => {
      const newTodo = {
        text: input,
        id: (Math.floor(Math.random() * (200 - 100 + 1)) + 100).toString(16),
      };
      setTasks([...tasks, newTodo]);
      setInput('');
  };

  const deleteTask = (id: string) => {
    const tasksCopy = [...tasks];
    const index = tasks.findIndex(task => task.id === id);
    tasksCopy.splice(index, 1);
    setTasks(tasksCopy);
  };

  const taskList = tasks.map((task, index) => {
      return (
        <Task
          key={task.id}
          text={task.text}
          onDeleteTask={() => deleteTask(task.id)}
        />
      );
    });

  return (
    <div className="App">
      <AddTaskForm
        value={input}
        onChangeText={changeText}
        onAddTodo={addTodo}
      />
      {taskList}
    </div>
    );
};

export default App;
