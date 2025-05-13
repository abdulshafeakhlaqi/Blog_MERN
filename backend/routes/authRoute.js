import { Router } from "express";
import { login, logout, register } from "../controllers/authController.js";

const authRoute = Router();

authRoute.post("/auth/login",login);
authRoute.post("/auth/logout",logout);
authRoute.post("/auth/register",register);

export default authRoute;