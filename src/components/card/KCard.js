import React from 'react';
import './KCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil } from '@fortawesome/free-solid-svg-icons'

const KCard = () => {
    return (
        <div className='card ml-5'>
            <div className="card-header d-flex text-black justify-content-between">
                <h4 className='card-title'>Card Title</h4>
                <input className='form-control' type="hidden" placeholder='Card Title' />
                <a href="#"><FontAwesomeIcon className='edit-icon' icon={faPencil} /></a>
            </div>
            <div className="card-body">
                <div className="todo-list">
                    <p className='alert alert-primary d-flex justify-content-between'>
                        <div className="text-alert">
                            Hello !!
                        </div>
                        <a href="#" className='task-edit'><FontAwesomeIcon icon={faPencil} /></a>
                    </p>
                    <p className='alert alert-primary d-flex justify-content-between'>
                        <div className="text-alert">
                            Hello !!
                        </div>
                        <a href="#" className='task-edit'><FontAwesomeIcon icon={faPencil} /></a>
                    </p>
                    <textarea className='form-control mt-3 alert-block' type="text" placeholder='Task name' />
                </div>
            </div>

        </div>
    );
};

export default KCard;