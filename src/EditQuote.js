import React from 'react';
import QuoteForm from './QuoteForm';

const EditQuote = ({ id, name, body, editItem }) => {
    const formSubmission = (formData) => {
        console.log(formData);
        editItem(formData);
    };

    return (
        <QuoteForm id={id} name={name} body={body} formSubmission={formSubmission} />
    );
}

export default EditQuote;
