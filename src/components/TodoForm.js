import style from "./TodoForm.module.scss"
import React, {useState} from "react";
const TodoForm = ({addTask}) => {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.currentTarget.value);
        console.log(value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(value);
        setValue('');

    }
    const handleKeyPress = (e) => { //для того что бы добавлять таски с помощью enter
        if(e.key === 'Enter'){
            handleSubmit(e);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={value}
                onChange={handleChange}
                onKeyPress={handleKeyPress}
                className={style.input}
                type="text"
                placeholder='Text here...'/>
            <button
                className={style.button}>Add</button>
        </form>
    )
}

export default TodoForm;