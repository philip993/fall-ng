const express = require("express");
const router = express.Router();

const pagesCtrl = require("../controllers/pageCt");

router.get("/", pagesCtrl.getIndexPage);
router.get("/about", pagesCtrl.getAboutPage);

module.exports = router;
