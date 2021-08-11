import React, { useState } from 'react'

export const GifSearch = ({ setCategories }) => {

    const [input, setInput] = useState('');

    const inputChange = (e) => {
        setInput(e.target.value);
    }

    const submit = (e) => {
        e.preventDefault();

        setCategories([input]);
        setInput('');
    }

    return (
        <form onSubmit={submit}>
            <input
                className="form-control"
                placeholder="Search..."
                type="text"
                value={input}
                onChange={inputChange}
            />
        </form>
    )
}