let user = {
    name: "Джон",
    age: 30
};

/*
user.sayHi = function() {
  alert("Привет!");
};*/

user.sayHi = function() {
    let element = document.getElementById("content");
    element.innerHTML = "Привет, я " + this.name + " и мне " + this.age + " лет!";
};

user.sayHi();
