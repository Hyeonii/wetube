import express from "express";
import routes from "../routes";
import {
  editPorfile,
  userDetail,
  changePassword,
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get(routes.editProfile, editPorfile);
userRouter.get(routes.changePassword, changePassword);
userRouter.get(routes.userDetail(), userDetail);

export default userRouter;