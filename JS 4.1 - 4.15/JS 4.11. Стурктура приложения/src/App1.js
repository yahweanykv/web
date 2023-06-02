import React, { useState } from 'react';
import './styles.css';

export default function App1() {
    const [count, setCount] = useState(0);

    return (
        <div className="app1-container">
            <h1 className="app1-heading">Пять утренних привычек для хорошего настроения</h1>
            <p className="app1-description">
                Утро – это время, когда далеко не все чувствуют себя радостно и вдохновлено. Что же может помочь сделать это время суток очень даже бодрым и сохранить это настроение на весь день? Рассказываем!
            </p>
            <a href="#" className="app1-read-more">ЧИТАТЬ ДАЛЕЕ</a>
        </div>
    );
}
