import React, {useState, useEffect} from 'react';
import AddQuote from './AddQuote';
import QuotesList from "./QuotesList";

function QuotesContainer({ }) {
    const [quotes, setQuotes] = useState([]);

    useEffect(() => {
        const result = JSON.parse(localStorage.getItem("quotes") || []);
        setQuotes(result);
    }, []);

    useEffect(() => {
        localStorage.setItem('quotes', JSON.stringify(quotes));
    }, [quotes]);

    const addItem = quote => {
        const newQuotes = [quote, ...quotes];
        setQuotes(newQuotes);
    }

    const removeItem = id => {
        const confirmRemove = window.confirm("Are you sure?");
        if (confirmRemove) {
            const result = quotes.filter(quote => {
              return quote.id !== id;
            });
            setQuotes(result);
        }
    };
  
  const editItem = quote => {
    const result = quotes.map(q => {
      if (q.id === quote.id) {
        return { ...q, ...quote };
      } else {
        return { ...q };
      }
    });
    setQuotes(result);
  }

    return (
      <div>
        Quotes Container
        <QuotesList editItem={editItem} quotes={quotes} removeItem={removeItem} />
        <AddQuote addItem={addItem}/>
      </div>
    );
}

export default QuotesContainer;