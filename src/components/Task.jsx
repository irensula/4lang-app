import { useState } from "react";

const Task = (props) => {

    const [val, setVal] = useState("");
    const click = () => {
        alert(val)
    }
    const change = event => {
        setVal(event.target.value);
    }

    return ( 
        <form>
            <p className="taskText">Lorem</p>
            <input 
                className="taskInput"
                onChange={change}
                value = {val}
            />
            <p className="taskText">dolor sit amet consectetur, adipisicing elit. Fuga aperiam animi voluptas tempore consequuntur exercitationem, suscipit sunt rem dicta similique. Libero dolorum id velit ut, quod ab quis illo quaerat!</p>
            <br/>
            <button className="button" onClick = {click}>Submit</button> 
        </form> 
    );
}
 
export default Task;