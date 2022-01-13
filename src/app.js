const express = require("express")
const { engine } = require("express-handlebars")
const path = require("path")

const app = express()

const port = process.env.PORT || 3000

const fortunes = [
    "Победи свои страхи, или они победят тебя.",
    "Рекам нужны истоки.",
    "Не бойся неведомого.",
    "Тебя ждет приятный сюрприз.",
    "Будь проще везде, где только можно.",
]

app.engine(".hbs", engine({
    defaultLayout: "main",
    extname: ".hbs",
}))

app.set("view engine", ".hbs")

app.use(express.static(path.resolve(__dirname, "..", "public")))

app.get("/", (req, res) => {
    
    res.render("home")
})

app.get("/about", (req, res) => {

    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)]

    res.render("about", { fortune: randomFortune })
})

app.use((req, res) => {

    res.status(404).render("404")
})

app.use((err, req, res, next) => {

    console.error(err.message)

    res.status(500).render("500")
})

app.listen(port)