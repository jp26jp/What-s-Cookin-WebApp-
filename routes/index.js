const express  = require("express"),
      router   = express.Router(),
      fetch    = require("node-fetch"),
      location = require("../location.config"),
      auth     = require("../auth.config")

const User = require("../models/user")

/* GET home page. */
router.get("/", function (req, res) {
    res.render("index")
})

/* POST new */
router.post("/", (req, res) => {
    User.create(req.body)
        .then(() => res.redirect("/dashboard/"))
        .catch(error => {
            if (error.name === "SequelizeValidationError") {
                res.render("dashboard", {
                    title : "Dashboard",
                    book  : User.build(req.body),
                    errors: error.errors,
                })
            }
        })
})

module.exports = router
