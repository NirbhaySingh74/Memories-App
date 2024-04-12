import axios from "axios";
import { useEffect, useState } from "react";
const Posts = () => {
  const [allPost, setAllPost] = useState([]);
  const getPost = async () => {
    const data = await axios.get("http://localhost:8000/posts/");
    setAllPost(data.data);
  };
  useEffect(() => {
    getPost();
  }, []);
  return (
    <div className="flex justify-center items-start min-h-screen bg-gray-200 py-5 px-10 my-5 mx-10">
      <div className="max-w-4xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {allPost.map((post) => (
          <div
            className="bg-white overflow-hidden shadow-md rounded-lg relative"
            key={post._id}
          >
            <div className="absolute top-1 left-1  text-white px-2 py-1 rounded-tr-lg rounded-bl-lg">
              <span className="text-sm font-semibold"> {post.creator}</span>
            </div>
            <img
              src={post.selectedFile}
              alt="image"
              className="w-full h-64 object-cover rounded-t-lg"
            />
            <div className="p-6">
              <h1 className="text-xl font-bold mb-2">{post.title}</h1>
              <p className="text-gray-700">{post.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
