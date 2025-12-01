import express from "express";
import { isLoggedIn } from "@/middlewares/auth.js";
import { checkToken, login, logout, getLoggedInStudent } from "@/controllers/auth.js";

const router = express.Router();

router.post("/login", login); // done
router.get("/check", checkToken);
router.get("/get-student", isLoggedIn, getLoggedInStudent);
router.post("/logout", logout);

export { router as authRouter };
