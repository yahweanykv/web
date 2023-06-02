class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            inputValue: ""
        };
    }

    handleChange = (event) => {
        this.setState({ inputValue: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { todos, inputValue } = this.state;
        if (inputValue.trim() !== "") {
            const newTodo = {
                id: todos.length + 1,
                text: inputValue
            };
            this.setState((prevState) => ({
                todos: [...prevState.todos, newTodo],
                inputValue: ""
            }));
        }
    };

    handleDelete = (id) => {
        this.setState((prevState) => ({
            todos: prevState.todos.filter((todo) => todo.id !== id)
        }));
    };

    render() {
        const { todos, inputValue } = this.state;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={this.handleChange}
                    />
                    <button type="submit">Add</button>
                </form>
                <ul>
                    {todos.map((todo) => (
                        <li key={todo.id}>
                            {todo.text}
                            <button onClick={() => this.handleDelete(todo.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

ReactDOM.render(
    <TodoList />,
    document.getElementById("app")
);

