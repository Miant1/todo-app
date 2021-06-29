import React from 'react'
import style from "./TodoList.module.scss"
const TodoList = ({todo, removeTask}) => {

    return(
        <div key={todo.id} className={style.item}>
            <div className={style.text}>
                <input type="checkbox"/>
                <p>{todo.task}</p>
            </div>
            <i onClick={() => removeTask(todo.id)} className="fas fa-trash"/>
        </div>
    )
}

export default TodoList;