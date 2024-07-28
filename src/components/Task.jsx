const Task = () => {
    
    const right = ["ipsum", "libero"];
    const [right_word_1, right_word_2] = right;

    const handleSubmit = (e) => {
        e.preventDefault();
        const word_1 = e.target.word_1.value;
        const word_2 = e.target.word_2.value;

        if(word_1 === right_word_1 && word_2 === right_word_2) {
            console.log("Correct!");
    }
    }
    return ( 
        <form onSubmit={handleSubmit}>
            <p className="taskText">Lorem</p>
            <input 
                type="text"
                name="word_1"
                className="taskInput"
                style={{color: word_1 === "libero" ? "trueColor" : "falseColor"}} 
            />
            <p className="taskText">dolor sit amet consectetur, adipisicing elit. Fuga aperiam animi voluptas tempore consequuntur exercitationem, suscipit sunt rem dicta similique. </p>
            <br/>
            <input 
                type="text"
                name="word_2"
                className="taskInput"              
                style={{color: word_2 === "libero" ? "trueColor" : "falseColor"}}  
            />
                <p className="taskText"> dolorum id velit ut, quod ab quis illo quaerat!</p>
            <br/>
            <button 
                className="button" 
            >Submit</button> 
        </form> 
    );
}
 
export default Task;