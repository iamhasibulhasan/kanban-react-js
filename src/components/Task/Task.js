import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';

const Task = (props) => {
    let { taskId, inputVal } = props;
    console.log(taskId);
    const [showEdit, setShowEdit] = useState(false);
    const [input, setInput] = useState('');

    const handleShowEdit = (e) => {
        e.preventDefault();
        setShowEdit(true);
    }
    const handleHideEdit = (e) => {
        e.preventDefault();
        setShowEdit(false);
    } 

    // * Drag n Drop Function here



    const drag = (ev) => {
        ev.dataTransfer.setData("text", ev.target.id);
    }




    return (
        <div>
            <div>
            {
                showEdit ?
                    <form onSubmit={(e) => handleHideEdit(e)}>
                            <input type="text" className="form-control" value={input || inputVal} onInput={e => setInput(e.target.value)} />
                    </form> :
                        <p className='alert alert-primary d-flex justify-content-between' id={Math.floor(Math.random() * 100)} draggable="true" onDragStart={(e) => drag(e)}>
                            <span className="text-alert">
                                {input || inputVal}
                            </span>
                            <a onClick={(e) => handleShowEdit(e)} href="#" className='task-edit'><FontAwesomeIcon icon={faPencil} /></a>
                        </p>
            }
        </div>
        </div>
    );
};

export default Task;