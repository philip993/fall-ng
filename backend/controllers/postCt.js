const { Post } = require("../models/Post");

exports.getForm = async (req, res) => {
  await res.send("FORM");
};

exports.getPosts = async (req, res) => {
  //await Post.find({});
  await res.send("POSTS");
};

exports.newPost = async (req, res) => {
  /*
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });

  await post.save();
  */
  await res.send("Posted");
};
