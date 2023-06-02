import React, { useState } from 'react';
import './styles.css';

export default function App3() {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div className="app3-container">
            <input type="text" value={inputValue} onChange={handleChange} className="app3-input" />
            <p className="app3-output">Вы ввели: {inputValue}</p>
        </div>
    );
}
