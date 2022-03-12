import React, { useState } from 'react';
import './EditableTask.css';
import Task from './../Task/Task';

const EditableTask = () => {
    const [taskList, setTaskList] = useState([]);
    const [input, setInput] = useState('');

    // console.log(taskList.length);
    const addTask = (e) => {
        e.preventDefault();
        setTaskList(taskList.concat(<Task key={taskList.length} taskId={taskList.length} inputVal={input} />));
        setInput('');


    }
    return (
        <div className="card-body">
            <div className="todo-list">
                {taskList}
                <form onSubmit={(e) => addTask(e)}>
                    <input id='taskField' className='form-control mt-3 alert-block' type="text" placeholder='Task name' value={input} onInput={e => setInput(e.target.value)} />
                </form>
            </div>
        </div>
    );
};

export default EditableTask;