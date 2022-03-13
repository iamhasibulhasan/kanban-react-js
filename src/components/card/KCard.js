import React, { useState } from 'react';
import './KCard.css';
import EditableTask from '../EditableTask/EditableTask';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const KCard = () => {
    const [taskCard, setTaskCard] = useState([]);



    const addTask = (e) => {
        e.preventDefault();
        setTaskCard(taskCard.concat(<EditableTask key={taskCard.length} />));
        // console.log(typeof (taskCard));
    }
    return (
        <Container>
            <a onClick={(e) => addTask(e)} className='add-list-btn' href="#"><FontAwesomeIcon className='plus-icon' icon={faPlus} /> Add a list</a>
            {
                <div className='mt-5 '>
                    <div className='all-card ml-5'>
                        {taskCard}
                        {/* {editTask} */}
                    </div>
                </div>
            }
        </Container>

    );
};

export default KCard;