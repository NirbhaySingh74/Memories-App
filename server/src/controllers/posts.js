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
  const { title, message, creator } = req.body;
  const fileUrl = await uploadOnCloudinary(req.file.path);

  const newPost = new PostMessage({
    title,
    message,
    creator,
    selectedFile: fileUrl,
  });
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
