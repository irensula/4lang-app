import { useState } from "react";

const Task = (props) => {

    const [inputText, setInputText] = useState("");
    function handleChange(event) {
        const newValue = event.target.value;
        setInputText(newValue);
      }

    return ( 
        <form>
            <p className="taskText">Lorem</p> 
            <input className="taskInput" type="text" value={inputText} onChange={handleChange} />
            <p className="taskText">dolor sit amet consectetur, adipisicing elit. Fuga aperiam animi voluptas tempore consequuntur exercitationem, suscipit sunt rem dicta similique. Libero dolorum id velit ut, quod ab quis illo quaerat!</p>
            <br/>
            <button
                className="button"
                onClick={() => {
                    props.onAdd(inputText);
                    setInputText("");
                }}>
                Submit
             </button>
        </form> 
    );
}
 
export default Task;