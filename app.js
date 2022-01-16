const express = require("express")
const { engine } = require("express-handlebars")
const path = require("path")
const cookieParser = require("cookie-parser")
const handlers = require("./lib/handlers")
const { credentials } = require("./config")
const expressSession = require=("express-session")

const app = express()

const port = process.env.PORT || 3000

app.disable("x-powered-by")

app.engine(".hbs", engine({
    defaultLayout: "main",
    extname: ".hbs",
}))

app.set("view engine", ".hbs")

app.use(cookieParser(credentials.cookieSecret))

app.use(expressSession({
    resave: false,
    saveUninitialized: false,
    secret: credentials.cookieSecret,
}))

app.use(express.static(path.resolve(__dirname, "public")))

app.get("/", handlers.home)

app.get("/about", handlers.about)

app.get("/headers", (req, res) => {

    res.type("text/plain")

    const headers = Object.entries(req.headers)
        .map(([key, value]) => `${key}: ${value}`)
        .join("\n")

    res.send(headers)

})

app.use(handlers.notFound)

app.use(handlers.serverError)

if (require.main === module) {

    app.listen(port)

} else {

    module.exports = app

}
