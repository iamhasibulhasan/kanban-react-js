import React, { useState } from 'react';
import './EditableTask.css';
import Task from './../Task/Task';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil } from '@fortawesome/free-solid-svg-icons';


const EditableTask = () => {
    const [taskList, setTaskList] = useState([]);
    const [input, setInput] = useState('');
    const [showEditTitle, setShowEditTitle] = useState(false);
    const [inputTitle, setInputTitle] = useState('New Todo');

    const handleShowEditTitle = (e) => {
        e.preventDefault();
        setShowEditTitle(true);
    }
    const handleHideEditTitle = (e) => {
        e.preventDefault();
        setShowEditTitle(false);
    }
    // console.log(taskList.length);
    const addTask = (e) => {
        e.preventDefault();
        setTaskList(taskList.concat(<Task key={taskList.length} taskId={taskList.length} inputVal={input} />));
        setInput('');
    }
    return (
        <div className="card">
            <div className="card-body">
            <div className="todo-list">
                    {

                        showEditTitle ?
                            <form onSubmit={(e) => handleHideEditTitle(e)}>
                                <input className='form-control' type="text" placeholder='Todo name' value={inputTitle} onInput={e => setInputTitle(e.target.value)} />
                            </form> :
                            <div className=' d-flex text-black justify-content-between'>
                                <h4 className='card-title'>{inputTitle}</h4>
                                <a onClick={(e) => handleShowEditTitle(e)} href='#'><FontAwesomeIcon className='edit-icon' icon={faPencil} /></a>
                            </div>

                    }
                {taskList}
                <form onSubmit={(e) => addTask(e)}>
                    <input id='taskField' className='form-control mt-3 alert-block' type="text" placeholder='Task name' value={input} onInput={e => setInput(e.target.value)} />
                </form>
            </div>
        </div>
        </div>
    );
};

export default EditableTask;