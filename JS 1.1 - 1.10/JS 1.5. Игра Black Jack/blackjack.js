// Функция для создания и возвращения новой колоды карт
function createDeck() {
    const suits = ["Пики", "Черви", "Бубны", "Трефы"];
    const ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Валет", "Дама", "Король", "Туз"];

    const deck = [];

    for (const suit of suits) {
        for (const rank of ranks) {
            deck.push({ suit, rank });
        }
    }

    return deck;
}

// Функция для перемешивания колоды карт
function shuffleDeck(deck) {
    const shuffledDeck = [...deck];

    for (let i = shuffledDeck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledDeck[i], shuffledDeck[j]] = [shuffledDeck[j], shuffledDeck[i]];
    }

    return shuffledDeck;
}

// Функция для вычисления значения карты
function getCardValue(card) {
    const { rank } = card;
    if (["Валет", "Дама", "Король"].includes(rank)) {
        return 10;
    } else if (rank === "Туз") {
        return 11;
    } else {
        return parseInt(rank);
    }
}

// Функция для подсчета суммы карт на руках
function getHandValue(hand) {
    let sum = hand.reduce((acc, card) => acc + getCardValue(card), 0);

    // Проверка наличия тузов и коррекция суммы при их наличии
    const aces = hand.filter(card => card.rank === "Туз");
    for (const ace of aces) {
        if (sum > 21) {
            sum -= 10;
        }
    }

    return sum;
}

// Функция для игры в Black Jack
function playBlackJack() {
    console.log("Добро пожаловать в игру Black Jack!");

    const deck = shuffleDeck(createDeck());
    let playerHand = [deck.pop(), deck.pop()];
    let dealerHand = [deck.pop(), deck.pop()];
    let gameOver = false;

    console.log("Ваши карты: ", playerHand);
    console.log("Карты дилера: ", [dealerHand[0], "???"]);

    while (!gameOver) {
        const playerScore = getHandValue(playerHand);
        const dealerScore = getHandValue(dealerHand);

        if (playerScore === 21) {
            console.log("Black Jack! Вы выиграли!");
            gameOver = true;
        } else if (playerScore > 21) {
            console.log("Перебор! Вы проиграли.");
            gameOver = true;
        } else {
            const answer = prompt("Хотите взять еще карту? (Да/Нет)").toLowerCase();

            if (answer === "да" || answer === "д") {
                playerHand.push(deck.pop());
                console.log("Ваши карты: ", playerHand);
            } else {
                gameOver = true;
            }
        }
    }

    while (getHandValue(dealerHand) < 17) {
        dealerHand.push(deck.pop());
    }

    console.log("Карты дилера: ", dealerHand);

    const playerScore = getHandValue(playerHand);
    const dealerScore = getHandValue(dealerHand);

    if (dealerScore > 21) {
        console.log("Перебор у дилера! Вы выиграли!");
    } else if (dealerScore > playerScore) {
        console.log("Дилер победил.");
    } else if (dealerScore < playerScore) {
        console.log("Вы победили!");
    } else {
        console.log("Ничья.");
    }
}

// Запуск игры
playBlackJack();
