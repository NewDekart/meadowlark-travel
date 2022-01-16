const fortunes = [
    "Победи свои страхи, или они победят тебя.",
    "Рекам нужны истоки.",
    "Не бойся неведомого.",
    "Тебя ждет приятный сюрприз.",
    "Будь проще везде, где только можно.",
]

function getRandomFortune() {

    const randomIndex = Math.floor(Math.random() * fortunes.length)

    return fortunes[randomIndex]
}

module.exports = {
    getRandomFortune
}