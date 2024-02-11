

const express = require('express');
const router = express.Router();

// import controller

const {createpost,getAllpost} = require("../controllers/postcontroller");
const {likepost,unlikePost} = require("../controllers/likecontroller");
const {commentPost,removecomment} = require("../controllers/commentcontroller");



// mapping create or routes create 
// mongodb database mai collectons jo bn rahe hai wo model ke bn rahe hai..

router.post("/posts/create",createpost);
router.get("/posts",getAllpost);
router.post("/likes/like",likepost);
router.post("/likes/unlike",unlikePost);
router.post("/comments/create",commentPost);
router.post("/comments/deletecommentpost",removecomment);



// export router

module.exports = router;