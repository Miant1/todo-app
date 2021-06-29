import style from "./App.module.scss"
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import React, {useState} from "react";

function App() {
  const [todo, setTodo] = useState([]);

  const addTask = (value) => {
    if(value){
      const newItem = {
        id: Math.random().toString(36).substr(2,5),
        task: value,
        complete: false
      }
      setTodo([...todo, newItem]);
    }
  }

  const deleteTask = (id) => {
    setTodo([...todo.filter((todo) => todo.id !== id)])
  }
  console.log(todo);
  return (
      <div className={style.app}>
        <h1>Todo</h1>
        <h3>by Anton Milasenko</h3>
        <TodoForm addTask={addTask}/>
        {
          todo.map((todo) => {
            return (
                <TodoList
                    todo={todo}
                    removeTask={deleteTask}
                />
            )
          })
        }
      </div>
  );
}

export default App;
