// Создаю объект покупателя
var customer = {
    name: "Аникеев Илья",
    phone: "+7 (999) 999-99-99",
    email: "209253@edu.fa.ru",
    address: "ул. Пушкина, д. Калатушкина",
    city: "Москва"
};

// Вывожу информацию о покупателе на страницу
document.getElementById("name").textContent = customer.name;
document.getElementById("email").textContent = customer.email;
document.getElementById("city").textContent = customer.city;
document.getElementById("phone").textContent = customer.phone;
document.getElementById("address").textContent = customer.address;

