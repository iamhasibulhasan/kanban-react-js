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
    return (
        <div>
            {
                showEdit ?
                    <form onSubmit={(e) => handleHideEdit(e)}>
                        <input type="text" className="form-control mt-3" value={input} onInput={e => setInput(e.target.value)} />
                    </form> :
                    <p className='alert alert-primary d-flex justify-content-between' id={taskId}>
                        <span className="text-alert">
                            {input || inputVal}
                        </span>
                        <a onClick={(e) => handleShowEdit(e)} href="#" className='task-edit'><FontAwesomeIcon icon={faPencil} /></a>
                    </p>
            }
        </div>
    );
};

export default Task;