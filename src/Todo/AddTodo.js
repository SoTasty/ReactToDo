import React, {useState} from "react";
import propTypes from "prop-types";

function AddTodo({onCreate}) {
    const [value, setValue] = useState('')

    function submitHandler(event) {
        event.preventDefault()
        
        if (value.trim()) {
            onCreate(value)
        }
    }

    return(
        <form style={{marginBottom: '1rem'}} onSubmit={submitHandler}>
            <input value={value} onChange={event => setValue(event.target.value)}/>
            <button type="submit">Add task</button>
        </form>
    )
}

AddTodo.propTypes = {
    onCreate: propTypes.func.isRequired
}


export default AddTodo