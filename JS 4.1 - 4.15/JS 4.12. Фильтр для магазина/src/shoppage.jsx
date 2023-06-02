import React from "react";
import Product from ".././src/Product";
import { useState } from 'react';
import styles from './styles.css';

function Shop() {

    const product = [
        {
            name: "Проектор Wanbo Projector T6 MAX 1920x1080 (Full HD), 3000:1, 550 лм, LCD, 1.94 кг",
            description:
                "Технология проекции: LCD\n" +
                "Разрешение проектора: 1920x1080 (Full HD)\n" +
                "Световой поток: 550 лм\n" +
                "Контрастность: 3000:1\n" +
                "Тип лампы: LED. ",
            price: 21900,
            src:"https://avatars.mds.yandex.net/get-mpic/7721969/img_id5888182922790230157.jpeg/200x200"
        },
        {
            name: "Проектор XGIMI Elfin 1920x1080 (Full HD), 800 лм, DLP, 0.9 кг",
            description:
                "Технология проекции: DLP\n" +
                "Разрешение проектора: 1920x1080 (Full HD)\n" +
                "Световой поток: 800 лм\n" +
                "Тип лампы: LED ",
            price: 56990,
            src:"https://avatars.mds.yandex.net/get-mpic/5240148/img_id5511642910948030340.jpeg/200x200"
        },
        {
            name: "Проектор Samsung Freestyle 1920x1080 (Full HD)",
            description:
                "Технология проекции: DLP\n" +
                "Разрешение проектора: 1920x1080 (Full HD)\n" +
                "Световой поток: 550 лм\n" +
                "Контрастность: 100000:1\n" +
                "Тип лампы: LED ",
            price: 52490,
            src:"https://avatars.mds.yandex.net/get-mpic/5249393/img_id1982287656882193162.png/200x200"
        },
        {
            name: "Проектор Wanbo Wanbo Projector T2 MAX 1920x1080",
            description:
                "Технология проекции: LCD\n" +
                "Разрешение проектора: 1920x1080 (Full HD)\n" +
                "Световой поток: 250 лм\n" +
                "Контрастность: 5000:1\n" +
                "Тип лампы: LED",
            price: 11590,
            src:"https://avatars.mds.yandex.net/get-mpic/7764504/img_id2114341933679638853.jpeg/200x200"
        },
        {
            name: "Портативный проектор Wanbo Projector T6R Max",
            description:
                "Световой поток: 650 лм\n" +
                "Контрастность: 3000:1\n" +
                "Тип: портативный",
            price: 21490,
            src:"https://avatars.mds.yandex.net/get-mpic/5363183/img_id5221884018429556273.jpeg/200x200"
        },
        {
            name: "Проектор XGIMI Halo+ 1920x1080 (Full HD), 900 лм, DLP, 1.6 кг",
            description:
                "Технология проекции: DLP\n" +
                "Разрешение проектора: 1920x1080 (Full HD)\n" +
                "Световой поток: 900 лм\n" +
                "Тип лампы: LED",
            price: 76999,
            src:"https://avatars.mds.yandex.net/get-mpic/5232956/img_id7751838913157911246.png/200x200"
        },
        {
            name: "Проектор Byintek K45 Smart (Auto Focus)",
            description:
                "Назначение: для домашнего кинотеатра\n" +
                "Разрешение проектора: 1920x1080 (Full HD)\n" +
                "Световой поток: 700 лм\n" +
                "Контрастность: 18000:1\n" +
                "Технология: LCD",
            price: 24590,
            src:"https://avatars.mds.yandex.net/get-mpic/5232956/img_id7751838913157911246.png/200x200"
        },
    ];

    const [products, setProducts] = useState([...product]);

    const sortByPriceAsc = () => {
        const sortedProducts = [...products];
        sortedProducts.sort((a, b) => a.price - b.price);
        setProducts(sortedProducts);
    };

    const sortByPriceDesc = () => {
        const sortedProducts = [...products];
        sortedProducts.sort((a, b) => b.price - a.price);
        setProducts(sortedProducts);
    };

    return (
        <>
            <header rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css"
                    integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4"
                    crossorigin="anonymous" className="header bg-light py-3">
                <div className="container">
                    <h1 className="display-4">Проекторы</h1>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <button className="btn btn-primary" onClick={sortByPriceAsc}>
                                    Сортировать по возрастанию цены
                                </button>
                            </li>
                            <li className="nav-item">
                                <button className="btn btn-primary" onClick={sortByPriceDesc}>
                                    Сортировать по убыванию цены
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            <div
                style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
            >
                {products.map((product) => (
                    <Product
                        key={product.name}
                        name={product.name}
                        description={product.description}
                        price={product.price}
                        src ={product.src}
                    />
                ))}
            </div>
        </>
    );
}

export default Shop;