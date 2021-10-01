import React, { useState } from "react";
import EditQuote from "./EditQuote";

function QuotesItem({ id, name, body, removeItem }) {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      {toggle ? (
        <div>
          <EditQuote id={id} name={name} body={body}  />
          <button onClick={() => setToggle(false)}>Cancel</button>
        </div>
      ) : (
        <div>
          <blockquote>
            {body} - {name}
          </blockquote>
          <button onClick={() => setToggle(!toggle)}>Edit</button>
          <button onClick={() => removeItem(id)}>Remove</button>
        </div>
      )}
    </div>
  );
}

export default QuotesItem;
