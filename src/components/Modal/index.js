import React from 'react';
import SearchFormContainer from '../../containers/SearchFormContainer';
import SearchListContainer from '../../containers/SearchListContainer';
import './style.css';

const Modal = () => {
    return (
        <div className="modal-window">
            <SearchFormContainer />
            <SearchListContainer />
        </div>
    );
};

export default Modal;