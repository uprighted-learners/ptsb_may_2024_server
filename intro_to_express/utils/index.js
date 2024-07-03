function logTime (req,res,next) {
    let date = new Date()

    req.datePosted = date.toLocaleDateString()

    console.log(`Date Posted: ${req.datePosted}`);
    next()

}

module.exports = {
    logTime
}