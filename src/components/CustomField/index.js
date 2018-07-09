import React from 'react';

const CustomField = ({input, meta}) => {
    console.log(meta.error);
    return (
        <div>
            <label htmlFor="email">Email: </label>
            <input {...input} type="text" name="email"/>
        </div>
    );
};

export default CustomField;
