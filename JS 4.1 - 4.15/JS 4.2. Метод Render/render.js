// Создаем React-элемент с помощью React.DOM
const messageElement = React.createElement('h1', null, 'Привет, мир!');

// Используем метод ReactDOM.render() для рендеринга элемента на странице
ReactDOM.render(messageElement, document.getElementById('root'));
