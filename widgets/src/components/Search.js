import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
    const [term, setTerm] = useState("");

    useEffect(() => {
        // Method 1 (best practice):
        const searchWiki = async () => {
            await axios.get('url');
        };

        searchWiki();

        // Method 2
        (async () => {
            await axios.get('url');
        })();

        // Method 3 without async
        axios.get('url')
        .then((response) => {
            console.log(response);
        })
    }, [term]);

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input className="input" 
                    onChange={e => setTerm(e.target.value)}
                    value={term}></input>
                </div>
            </div>
        </div>
    );
}

export default Search;