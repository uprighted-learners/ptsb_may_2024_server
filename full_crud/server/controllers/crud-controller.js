const router = require("express").Router();
const db = require("../mockdb/db.json");

// READ - GETting all the data
router.get("/all", (req, res) => {
  try {
    res.status(200).json({
      Results: db,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// READ - GETing 1 item by id
router.get("/one/:id", (req, res) => {
  try {
    console.log("current ID that was passed:", req.params.id);
    let filtered = db.filter((i) => i.id == req.params.id)
    res.status(200).json({
        Results: filtered.length > 0 ? filtered : "Nothing was found"
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
