// Компонент, выводящий фамилию, имя и возраст
const PersonInfo = (props) => {
    const { lastName, firstName, age } = props;
    return (
        <div>
            <p>Фамилия: {lastName}</p>
            <p>Имя: {firstName}</p>
            <p>Возраст: {age}</p>
        </div>
    );
};

// Компонент, изменяющий состояние при нажатии кнопки
class ClickButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            class: "off",
            label: "Нажми"
        };
    }

    press = () => {
        const className = this.state.class === "off" ? "on" : "off";
        const label = this.state.class === "off" ? "Нажата" : "Нажми";
        this.setState({ class: className, label: label });
    };

    render() {
        return (
            <div>
                <button onClick={this.press} className={this.state.class}>
                    {this.state.label}
                </button>
                <p>Состояние: {this.state.class}</p>
            </div>
        );
    }
}

ReactDOM.render(
    <div>
        <PersonInfo lastName="Аникеев" firstName="Илья" age={23} />
        <ClickButton />
    </div>,
    document.getElementById("app")
);
