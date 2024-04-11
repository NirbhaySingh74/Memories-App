import express from "express";
import { createPost, getPosts } from "../controllers/posts.js";
import { upload } from "../middleware/multer.middleware.js";
const router = express.Router();

// Use the upload middleware for handling file uploads
router.post("/", upload.single("selectedFile"), createPost);

router.get("/", getPosts);

export default router;
