import React from 'react';
import QuoteForm from './QuoteForm';

const AddQuote = ({ addItem }) => {
    const formSubmission = formData => {
        console.log('add quote : ', formData);
        addItem(formData);
    };

    return (
        <div>
            <h2>Add Quote</h2>
            <QuoteForm formSubmission={ formSubmission} />
        </div>
    );
}

export default AddQuote;
