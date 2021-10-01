import React from "react";
import QuotesItem from "./QuotesItem";

function QuotesList({ quotes, removeItem, editItem }) {
  return (
    <div>
      {quotes.length === 0 ? (
        <div>
          <h1>No quotes found</h1>
          <p>Add your first quote</p>
        </div>
      ) : (
        <div>
          <h1>My Quotes - {quotes.length}</h1>
          {quotes.map(quote => {
            return <QuotesItem key={quote.id} {...quote} removeItem={removeItem} editItem={editItem}/>;
          })}
        </div>
      )}
    </div>
  );
}

export default QuotesList;
