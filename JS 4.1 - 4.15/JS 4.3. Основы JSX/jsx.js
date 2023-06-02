const user = {
    id: 2,
    age: 23,
    firstName: 'Ilya',
    lastName: 'Anikeev',
    getFullName: function () {
        return `${this.firstName} ${this.lastName}`;
    }
};

const userClassName = "user-info";
const styleObj = {
    color: 'green',
    fontFamily: 'Verdana'
};

const userInfo = (
    <div className={userClassName} style={styleObj}>
        <p>Полное имя: {user.getFullName()}</p>
        <p>Возраст: {user.age}</p>
    </div>
);

ReactDOM.render(
    userInfo,
    document.getElementById("app")
);

