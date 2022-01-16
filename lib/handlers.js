const fortune = require("./fortune");

const home = (req, res) => {

    res.render("home")
}

const about = (req, res) => {

    const randomFortune = fortune.getRandomFortune()

    res.render("about", { fortune: randomFortune })
}

const notFound = (req, res) => {

    res.status(404)

    res.render("404")
}

/* eslint-disable no-unused-vars */
const serverError = (err, req, res, next) => {
/* eslint-enable no-unused-vars */

    res.status(500)

    res.render("500")
}

module.exports = {
    home,
    about,
    notFound,
    serverError
}