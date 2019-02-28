const express = require("express");
const router = express.Router();

const postCtrl = require("../controllers/postCt");

//router.get("/add", postCtrl.getForm);
router.post("/", postCtrl.newPost);
router.get("/", postCtrl.getPosts);
router.delete("/:id", postCtrl.deletePost);

module.exports = router;
