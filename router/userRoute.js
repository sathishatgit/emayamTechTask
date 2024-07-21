import express from "express";
import { userSignin, userSignup } from "../controller/userController.js";

const route = express.Router();

route.post("/signin", userSignin);
route.post("/signup", userSignup);

export default route;
