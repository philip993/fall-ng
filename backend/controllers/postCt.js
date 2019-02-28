const { Post } = require("../models/Post");
/*
exports.getForm = async (req, res) => {
  await res.send("FORM");
};
*/
exports.getPosts = (req, res) => {
  Post.find({}).then(posts => {
    res.status(200).json({
      posts: posts
    });
  });
};

exports.newPost = (req, res) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });

  post.save().then(post => {
    res.status(201).json({
      post: post
    });
  });
};

exports.deletePost = (req, res) => {
  Post.findOneAndRemove({ _id: req.params.id }).then(post => {
    res.status(201).json({
      post: post
    });
  });
};
