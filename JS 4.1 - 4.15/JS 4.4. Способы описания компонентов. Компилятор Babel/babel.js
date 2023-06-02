// Компонент таймера
function Timer() {
    const [seconds, setSeconds] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds + 1);
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return <div>Seconds: {seconds}</div>;
}

// Компонент таймера с использованием классов ES6
class TimerClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = { seconds: 0 };
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState((prevState) => ({ seconds: prevState.seconds + 1 }));
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return <div>Seconds: {this.state.seconds}</div>;
    }
}

// Компонент таймера с помощью стрелочной функции
const TimerArrow = () => {
    const [seconds, setSeconds] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds + 1);
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return <div>Seconds: {seconds}</div>;
}

// Рендеринг компонентов на страницу
ReactDOM.render(
    <div>
        <h2>Functional Component:</h2>
        <Timer />

        <h2>Class Component:</h2>
        <TimerClass />

        <h2>Arrow Function Component:</h2>
        <TimerArrow />
    </div>,
    document.getElementById("app")
);
