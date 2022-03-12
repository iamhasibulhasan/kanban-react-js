import React from 'react';
import './KCard.css';
import Editable from './../Editable/Editable';
import EditableTask from '../EditableTask/EditableTask';

const KCard = () => {
    return (
        <div className='card ml-5'>
            <Editable></Editable>
            <EditableTask></EditableTask>
        </div>
    );
};

export default KCard;