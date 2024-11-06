import express from "express";
import {
  getUsers,
  getUserByID,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/users.js";

const userRouter = express.Router();

userRouter.route("/").get(getUsers).post(createUser);
userRouter.route("/:id").get(getUserByID).put(updateUser).delete(deleteUser);

export default userRouter;
