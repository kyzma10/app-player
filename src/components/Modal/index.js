import React from 'react';
import './style.css';

const Modal = ({handleChange, handleSubmit}) => {
    return (
        <div className="modal-window">
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange}/>
            </form>
        </div>
    );
};

export default Modal;
