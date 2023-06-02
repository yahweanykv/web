import React, { useState } from 'react';
import './App.css';
import './index.css';

export default function App() {
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState('банан');
  const [todos, setTodos] = useState([{ text: 'Изучить хуки' }]);

  return (
      <div>
        <p>Возраст: {age}</p>
        <button onClick={() => setAge(age + 1)}>Увеличить возраст</button>

        <p>Любимый фрукт: {fruit}</p>
        <button onClick={() => setFruit('яблоко')}>Изменить фрукт</button>

        <p>Список задач:</p>
        <ul>
          {todos.map((todo, index) => (
              <li key={index}>{todo.text}</li>
          ))}
        </ul>
        <button onClick={() => setTodos([...todos, { text: 'Новая задача' }])}>
          Добавить задачу
        </button>
      </div>
  );
}


