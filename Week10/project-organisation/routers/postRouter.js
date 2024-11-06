import express from "express";
import {
  getPosts,
  getPostByID,
  createPost,
  updatePost,
  deletePost,
} from "../controllers/posts.js";

const postRouter = express.Router();

postRouter.route("/").get(getPosts).post(createPost);
postRouter.route("/:id").get(getPostByID).put(updatePost).delete(deletePost);

export default postRouter;
