import React, { useState } from "react";
import TaskInput from ".././src/todo";
import "./styles.css"; // Импорт CSS файла с вашими стилями

function App() {
    const categories = [
        { id: "personal", name: "Личное", icon: "😊" },
        { id: "work", name: "Работа", icon: "💼 ️" },
        { id: "study", name: "Учебные заметки", icon: "📚" },
        { id: "leisure", name: "Спортивные мероприятия", icon: "🏋️‍" },
    ];
    const [selectedCategory, setSelectedCategory] = useState(categories[0].id);
    const [tasks, setTasks] = useState([]);

    const handleCategoryClick = (categoryId) => {
        setSelectedCategory(categoryId);
    };

    const handleAddTask = (task) => {
        setTasks([...tasks, task]);
    };

    const filteredTasks = tasks.filter(task => task.category === selectedCategory);

    return (
        <div className="app">
            <nav className="nav">
                {categories.map(category => (
                    <button
                        key={category.id}
                        onClick={() => handleCategoryClick(category.id)}
                        className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                    >
                        {category.icon} {category.name}
                    </button>
                ))}
            </nav>
            <ul className="task-list">
                {filteredTasks.map(task => (
                    <li key={task.id}>{task.title}</li>
                ))}
            </ul>
            <TaskInput onAddTask={handleAddTask} selectedCategory={selectedCategory} />
        </div>
    );
};

export default App;

