let express = require('express');
let router = express.Router();

router.route("/").get((req, res) => res.render('index.html'));
router.route("/date").get((req, res) => res.json({
    date: new Date()
}));

module.exports = router;