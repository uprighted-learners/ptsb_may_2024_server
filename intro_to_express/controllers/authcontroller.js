const router = require("express").Router()

const {logTime} = require("../utils")

router.post("/register", logTime ,(req, res) => {
    console.log("In the auth controller");
    try{
        const {firstName, lastName, email, password} = req.body

     
        console.log("Created a user");
        res.status(200).json({
            Status: `User ${firstName} was created`,
            User: req.body,
            DateCreated: req.datePosted
        })
    }catch(err){
        res.status(500).send(err)
    }
})

router.get("/nomiddleware", (req,res) => {

    res.send("no middleware on this request")
})


module.exports = router;