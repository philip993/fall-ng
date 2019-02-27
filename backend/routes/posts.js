const express = require("express");
const router = express.Router();

const postCtrl = require("../controllers/postCt");

router.get("/add", postCtrl.getForm);
router.post("/add", postCtrl.newPost);
router.get("/all", postCtrl.getPosts);

module.exports = router;
