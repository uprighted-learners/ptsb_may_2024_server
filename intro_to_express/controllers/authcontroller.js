const router = require("express").Router()

router.post("/register", (req, res) => {
    console.log("In the auth controller");
    try{
        const {firstName, lastName, email} = req.body


        res.status(200).json({
            Status: `User ${firstName} was created`,
            User: req.body
        })
    }catch(err){
        res.status(500).send(err)
    }
})







module.exports = router;