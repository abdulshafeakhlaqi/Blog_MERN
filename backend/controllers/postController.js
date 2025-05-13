import postModel from "../models/postModel.js";

export const createPost = async (req,res) =>{
    try {
        const postData = postModel(req.body);
        const newPost = postData.save();
        res.status(200).json({success:true,message:"post created successfull",newPost});
    } catch (error) {
        res.status(500).json({success:false,message:error.message});
    }
}

export const getPosts = async (req,res) =>{
    try {
        const posts = await postModel.find();
        if(posts){
            res.status(200).json({success:true,posts});
        }
        else{
            res.status(403).json({success:false,message:"not posts found"});
        }
    } catch (error) {
        res.status(500).json({success:false,message:error.message});
    }
}

export const getPost = async (req,res) =>{
    const postID = req.params.id;
    try {
        const post = await postModel.findById(postID);
        if(post){
            res.status(200).json({success:true,post});
        }
        else{
            res.status(403).json({success:false,message:"post not found"});
        }
    } catch (error) {
        res.status(500).json({success:false,message:error.message});
    }
}

export const updatePost = async (req,res) =>{
    const postID = req.params.id;
    const {title,description,author_id} = req.body;
    try {
        const updatedPost = await postModel.findByIdAndUpdate(postID,{$set:{
            title: title,
            description: description,
            author_id: author_id
        }});
        if(updatePost){
            res.status(200).json({success:true,message:"post updated successfull",updatePost});
        }
        else{
            res.status(404).json({success:true,message:"post not updated",updatePost});
        }
    } catch (error) {
        res.status(500).json({success:false,message:error.message});
    }
}

export const deletePost = async (req,res) =>{
    const postID = req.params.id;
    try {
        const deletedPost = await postModel.findByIdAndDelete(postID);
        if(deletedPost){
            res.status(200).json({success:true,message:"post deleted successfully",deletedPost});
        }
        else{
            res.status(403).json({success:false,message:"post not deleted",deletedPost});
        }
    } catch (error) {
        res.status(500).json({success:false,message:error.message});
    }
}