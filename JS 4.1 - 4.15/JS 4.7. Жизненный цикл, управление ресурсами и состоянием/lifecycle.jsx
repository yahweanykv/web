class ClickButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { class: "off", label: "Нажми" };
        this.press = this.press.bind(this);
        console.log("constructor");
    }

    componentWillReceiveProps(nextProps) {
        console.log("componentWillReceiveProps()");
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate()");
    }

    press() {
        let className = this.state.class === "off" ? "on" : "off";
        this.setState({ class: className });
    }

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

ReactDOM.render(<ClickButton />, document.getElementById("app"));
