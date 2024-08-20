import React, { useState, useEffect } from 'react';
import './styles/Quotes.css';
import axios from 'axios';

const tags = ['Failure', 'Competition', 'Courage', 'Future', 'Inspirational', 'Work'];

function Quotes() {
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');


    useEffect(() => {
        const fetchQuote = async () => {
            try {
                const url = `https://api.quotable.io/random?tags=${tags.join('|')}`;
                const response = await axios.get(url);
                setQuote(response.data.content); 
                setAuthor(response.data.author);
            } catch (error) {
                console.error('Error fetching quote:', error);
                setQuote('Failed to load quote.'); 
                setAuthor('');
            }
        };

        fetchQuote();
    }, []); 

    return (
        <div className="quote-container">
        <p className="quotes">{quote || 'Loading quote...'}</p>
        {author && <p className="quote-author">— {author}</p>}
    </div>
    );
}

export default Quotes;
