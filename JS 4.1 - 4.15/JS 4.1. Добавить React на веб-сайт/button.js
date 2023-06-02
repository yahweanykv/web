/*Реализуем простую кнопку Press с помощью React. При первом клике на кнопку ее состояние изменяется, и текст кнопки
переключается с "Нажми, чтобы узнать больше" на "Круто, ....".
 */


'use strict'
const e = React.createElement;

/*Класс LikeButton наследуется от React.Component и имеет метод render(), которые затем рендерятся в DOM. */
class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false};
    }

    render() {
        if (this.state.liked) {
            return 'Поздравляем! Вы получили скидку на заказ из меню в размере 15%';
        }

        /*Компоненту передается функция обратного вызова, которая изменяет состояние кнопки с помощью метода setState (). */
        return e(
            'button',
            { onClick: () => this.setState({ liked: true}) },
            'Поставить лайк заведению'
        );
    }
}

/*Компонент извлекается из DOM по селектору и перерисовывается с помощью ReactDOM.render(). */
const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton),domContainer);