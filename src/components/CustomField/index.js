import React from 'react';

const CustomField = ({input, meta, ...rest}) => {
    return (
        <div>
            <input {...input} {...rest}/>
            <div>{meta.error && meta.touched ? meta.error : null}</div>
        </div>
    );
};

export default CustomField;
