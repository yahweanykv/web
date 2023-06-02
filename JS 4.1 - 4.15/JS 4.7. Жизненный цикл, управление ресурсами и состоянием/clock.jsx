// Компонент часов
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date().toLocaleTimeString()
        };
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            time: new Date().toLocaleTimeString()
        });
    }

    render() {
        return (
            <div>
                <h2>Текущее время:</h2>
                <p>{this.state.time}</p>
            </div>
        );
    }
}

ReactDOM.render(
    <Clock />,
    document.getElementById("app")
);
