import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function QuoteForm({formSubmission, id : slNo, name : author, body : quote}) {
  const [name, setName] = useState(author || "");
  const [body, setBody] = useState(quote || "");
  const [id, setId] = useState(slNo || uuidv4());

  const handleSubmit = event => {
    event.preventDefault();
    const formData = {
      name,
      body,
      id,
    };
    formSubmission(formData);
      setName('');
      setBody('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name</label> <br />
        <input
          type="text"
          value={name}
          onChange={event => setName(event.target.value)}
        />{" "}
        <br />
        <label>Body</label> <br />
        <textarea
          type="text"
          value={body}
          onChange={event => setBody(event.target.value)}
        />{" "}
        <br />
        <input type="submit" value="Save"></input>
      </form>
    </div>
  );
}

export default QuoteForm;
