// creating a variable to import the Router engine from express
const router = require("express").Router()

// all possible routes found within the 'parental' path of "/practice"
router.get("/test", (req, res) => {
    res.send("Hey you've hit the practice controller")
})

router.post("/greeting", (req,res) => {
    res.status(200).send("Good evening")
})

router.post("/json", (req,res) => {
    console.log(req.body);
    const {name} = req.body
    res.status(200).send(`Hey your name is ${name}`);
})

router.get("*", (req,res) => {
    res.status(404).send(`<img src="https://http.cat/404"/>`)
})


module.exports = router;