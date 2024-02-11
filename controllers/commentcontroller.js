const Post = require('../models/postmodel');
const Comment = require('../models/commentmodel');


exports.commentPost = async(req,res) => {

        try{

            // fetch data from request body 
            const {post,user,body} = req.body;

            // create comment object
            const comment = new Comment({post,user,body});

             // save the new comment object into the db 
            const savedComment = await comment.save();

            const updatedPost = await Post.findByIdAndUpdate(
                post,
                {$push : {comments : savedComment._id}},
                {new : true}
                
            )
            .populate("comments")
            .exec(); //Populates the comment array with the comments document
           
                
            res.json({

                data : updatedPost

            })


        }
        catch(error){

            return res.status(500)
            .json({

                error : ("error while commenting on post",error)

            })

        }
    
}



exports.removecomment = async(req,res) => {

    try{

        const {post,comment} = req.body;

        const deletecomment = await Comment.findOneAndDelete({post: post, _id: comment});

        const updatedPost = await Post.findByIdAndUpdate(
            post,
            {$pull : {comments : deletecomment._id}},
            {new : true}


        );
       

        res.json({

            post : updatedPost,

        })

    }
    catch(error){

        return res.status(500)
        .json({

            error : "error while romoving comment"

        })

    }

}   