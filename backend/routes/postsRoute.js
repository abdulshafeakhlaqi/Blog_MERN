import { Router } from "express";
import { createPost, getPosts , getPost, updatePost, deletePost } from "../controllers/postController.js";

const postRoute = Router();

postRoute.post("/posts/",createPost);
postRoute.get("/posts/",getPosts);
postRoute.get("/posts/:id",getPost);
postRoute.put("/posts/:id",updatePost);
postRoute.delete("/posts/:id",deletePost);



export default postRoute;