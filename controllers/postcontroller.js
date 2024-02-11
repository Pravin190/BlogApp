
const Post = require('../models/postmodel');

// create post

exports.createpost = async(req,res) => {

    try{

        const {title,body} = req.body;
        // create function instead of we used save function and add into DB its a good practice

        //title,body db mai insert krenge..model ka new object bnaya post aur use .save() se DB ke sath interact/insert kiya..
        // basically controller model ka use krke DB ke sath interact kr raha hai...
        const post = new Post({title,body});
        const savedPost = await post.save();

        res.json({

            post : savedPost

        });

    }
    catch(error){
        return res.status(500)
        .json({

            error : "Error while creating post",

        });



    }

}

// get all post

exports.getAllpost = async(req,res) => {

    try{

        const posts = await Post.find().populate("likes").populate("comments").exec();
        res.json({

        data : posts,


    })

    }
    catch(error){

        return res.status(404)
        .json({

            error : " error while getting all post"

        })


    }
}


