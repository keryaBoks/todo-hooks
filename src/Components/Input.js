import { useState } from "react";
import './Input.scss'

function Input({ addTask }) {

    const [input, setInput] = useState("");

    const handlerChange = (event) => {
        setInput(event.target.value);
    }

    const handlerSumbit = (event) => {
        event.preventDefault();
        addTask(input);
        setInput('');
    }

    return (
        <div className="main-div">
            <form onSubmit={handlerSumbit} className='ourFrom'>
                <input
                    value={input}
                    type='text'
                    placeholder="Add new todo here"
                    onChange={handlerChange}
                    className='myInput'
                />
            </form>
            <button className="buttonPlus" onClick={handlerSumbit}>+</button>
        </div>
    );
}

export default Input;