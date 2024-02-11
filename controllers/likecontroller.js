const Post = require("../models/postmodel");
const Like = require("../models/likemodel");
const { response } = require("express");


// likepost

exports.likepost = async(req,res) => {


    try{


        const {post,user} = req.body;

        // create new Like object
        const like = new Like({post,user});

        // save the new like into DB
        const savedlike = await like.save();


         // update posts collection basis on this

        // post, ki id find kr li first

         const updatedPost = await Post.findByIdAndUpdate(
            post,
            {$push : {likes : savedlike._id}},
            {new : true}
        )

        .populate("likes")
        .exec();

        res.json({
            post: updatedPost,
          });
        


    }
    catch (err) {
        return res.status(500).json({
          error: "Error While Like Post",
        });
      }
}

// Unlike a Post
exports.unlikePost = async (req, res) => {
    try {
      const { post, like } = req.body;
  
      // find and delete from like collection            // post: post, _id: like  if equal then delete
      const deletedLike = await Like.findOneAndDelete({ post: post, _id: like });
  
      // update the post collection
      const updatedPost = await Post.findByIdAndUpdate(
        post,
        { $pull: { likes: deletedLike._id } },
        { new: true }
      );
  
      res.json({
        post: updatedPost,
      });
    } catch (err) {
      return res.status(500).json({
        error: "Error While unLike Post",
      });
    }
  };