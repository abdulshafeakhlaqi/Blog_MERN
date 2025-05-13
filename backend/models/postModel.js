import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title:{type: String,required:true},
    description: {type:String,required:true},
    author_id: {type:String,required:true}
},{timestamps:true});

const postModel = mongoose.model("posts",postSchema);

export default postModel;