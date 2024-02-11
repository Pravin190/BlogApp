
const mongoose = require('mongoose');


// Route Handler

const postSchema = new mongoose.Schema({

    title : {

        type : String,
        required : true

    },
    body : {

        type : String,
        required : true

    },

    //  likes and comments isliye kyu ki humai like and comment ke collection mai data hoga uska ek id hoga to wo id likes and comments array mai dalna padega..

    likes : [{

        type : mongoose.Schema.Types.ObjectId,
        ref : "Like",                                   //reference to the like model

    }],
    comments : [{

        type : mongoose.Schema.Types.ObjectId,
        ref : "Comment",                                //reference to the comment model
    }]


})

// export postSchema alternate name is Post
module.exports = mongoose.model("Post",postSchema);