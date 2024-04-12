import { PostMessage } from "../models/postMessage.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
export const getPosts = async (req, res) => {
  try {
    const postMessage = await PostMessage.find();
    console.log(postMessage);
    res.status(200).json(postMessage);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const createPost = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const { title, message, creator } = req.body;
    if (!message) {
      throw new Error("Message is required");
    }
    const fileUrl = await uploadOnCloudinary(req.file.path);

    const newPost = new PostMessage({
      title,
      message,
      creator,
      selectedFile: fileUrl,
    });

    await newPost.save();
    return res.status(201).json(newPost);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};
