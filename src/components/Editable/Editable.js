import React, { useState } from 'react';
import './Editable.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil } from '@fortawesome/free-solid-svg-icons';

const Editable = () => {
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
    return (
        <div className="card">
            <div className="card-header">
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

            </div>
        </div>
    );
};

export default Editable;