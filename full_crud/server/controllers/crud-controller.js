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
    let filtered = db.filter((i) => i.id == req.params.id);
    res.status(200).json({
      Results: filtered.length > 0 ? filtered : "Nothing was found",
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE - POST a new item
router.post("/create", (req, res) => {
  try {
    let myObj = {
      id: db.length + 1,
      name: req.body.name,
      category: req.body.category,
      price: req.body.price,
      emoji: req.body.emoji,
    };

    db.push(myObj);

    res.status(200).json({
      Added: myObj,
      Results: db,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE - PUT/PATCH
router.put("/update/:id", (req, res) => {
  try {
    let indexOfItem = db.findIndex((i) => i.id == req.params.id);

    console.log(indexOfItem);

    db[indexOfItem] = {
      id: db[indexOfItem].id,
      name: req.body.name,
      category: req.body.category,
      price: req.body.price,
      emoji: req.body.emoji,
    };

    res.status(200).json({
      Updated: db[indexOfItem],
      Results: db,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE - removing an item
router.delete("/delete/:id", (req, res) => {
  try {
    let indexOfItem = db.findIndex((i) => i.id == req.params.id);

    db.splice(indexOfItem, 1)

    db.forEach((item, idx) => {
        item.id = idx + 1
    })

    res.status(200).json({
        Deleted: 1,
        Results: db
    })


  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
