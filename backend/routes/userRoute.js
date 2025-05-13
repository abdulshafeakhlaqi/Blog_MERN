import { Router } from "express";
import { createUser, deleteUser, getUser, getUsers, updateUser } from "../controllers/userController.js";

const userRouter = Router();

userRouter.get("/users/",getUsers);
userRouter.get("/users/:id",getUser);
userRouter.post("/users/",createUser);
userRouter.put("/users/:id",updateUser);
userRouter.delete("/users/:id",deleteUser);

export default userRouter;
