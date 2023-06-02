//  объекты пользователей
var users = [
    { name: "Илья", age: 23, email: "anykv@mail.ru" },
    { name: "Олег", age: 34, email: "oleg2015@gmail.ru" },
    { name: "Алексей", age: 18, email: "alex@mail.ru" },
];

// объекты заказов
var orders = [
    {
        id: 1,
        user: "Илья",
        date: new Date("2021-06-01"),
        price: 1100,
        restaurant: "Pizza Hut",
    },
    {
        id: 2,
        user: "Олег",
        date: new Date("2021-06-02"),
        price: 2000,
        restaurant: "Dominos Pizza",
    },
    {
        id: 3,
        user: "Алексей",
        date: new Date("2021-06-01"),
        price: 900,
        restaurant: "Dodo Pizza",
    },
];

// объекты ресторанов
var restaurants = [
    { name: "Pizza Hut", address: "Проспект Мира, 12" },
    { name: "Dominos Pizza", address: "ул. Ангарская, 34" },
    { name: "Dodo Pizza", address: "ул. Проектируемый проезд, 21" },
];

// Фильтрация страше 21
var filteredUsers = users.filter(function (user) {
    return user.age > 21;
});

var usersDiv = document.getElementById("users");
filteredUsers.forEach(function (user) {
    var userP = document.createElement("p");
    userP.textContent = "Имя: " + user.name + ", возраст: " + user.age;
    usersDiv.appendChild(userP);
});

// Вывод заказов Ильи
var ivansOrders = orders.filter(function (order) {
    return order.user === "Илья";
});

var ordersDiv = document.getElementById("orders");
var restaurantOrders = {};
ivansOrders.forEach(function (order) {
    if (!restaurantOrders.hasOwnProperty(order.restaurant)) {
        restaurantOrders[order.restaurant] = 0;
    }

    restaurantOrders[order.restaurant] += order.price;

    var orderP = document.createElement("p");
    orderP.textContent =
        "Заказ #" +
        order.id +
        " от " +
        order.date +
        " в ресторане " +
        order.restaurant +
        ", стоимость: " +
        order.price +
        " руб.";
    ordersDiv.appendChild(orderP);
});

// Вывожу рестораны и адреса, у которых заказано на сумму более 1000 руб.
var filteredRestaurants = restaurants.filter(function (restaurant) {
    var totalOrders = orders
        .filter(function (order) {
            return order.restaurant === restaurant.name;
        })
        .reduce(function (sum, order) {
            return sum + order.price;
        }, 0);

    return totalOrders > 1000;
});

var restaurantsDiv = document.getElementById("restaurants");
filteredRestaurants.forEach(function (restaurant) {
    var restaurantP = document.createElement("p");
    restaurantP.textContent =
        "Ресторан " + restaurant.name + ", адрес: " + restaurant.address;
    restaurantsDiv.appendChild(restaurantP);
});
