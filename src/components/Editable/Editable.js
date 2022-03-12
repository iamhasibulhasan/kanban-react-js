import React, { useState } from 'react';
import './Editable.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil } from '@fortawesome/free-solid-svg-icons';

const Editable = () => {
    const [showEdit, setShowEdit] = useState(false);
    const [input, setInput] = useState('New Todo');

    const handleShowEdit = (e) => {
        e.preventDefault();
        setShowEdit(true);
    }
    const handleHideEdit = (e) => {
        e.preventDefault();
        setShowEdit(false);
    }
    return (
        <div className="card-header">
            {

                showEdit ?
                    <form onSubmit={(e) => handleHideEdit(e)}>
                        <input className='form-control' type="text" placeholder='Todo name' value={input} onInput={e => setInput(e.target.value)} />
                    </form> :
                    <div className=' d-flex text-black justify-content-between'>
                        <h4 className='card-title'>{input}</h4>
                        <a onClick={(e) => handleShowEdit(e)} href='#'><FontAwesomeIcon className='edit-icon' icon={faPencil} /></a>
                    </div>

            }

        </div>
    );
};

export default Editable;