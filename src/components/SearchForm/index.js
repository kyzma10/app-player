import React from 'react';
import FaSearch from 'react-icons/lib/fa/search-plus';
import {Field, reduxForm, reset} from 'redux-form';

let SearchForm = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <Field name="search" type="text" component="input"/>
            <FaSearch onClick={handleSubmit}/>
        </form>
    );
};

const afterSubmit = (result, dispatch) => dispatch(reset('search'));

SearchForm = reduxForm({
    form: 'search',
    onSubmitSuccess: afterSubmit
})(SearchForm);

export default SearchForm;
