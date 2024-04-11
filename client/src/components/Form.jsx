const Form = () => {
  return (
    <div className="max-w-md mx-auto bg-white p-4 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4 text-center">Creating a Memory</h1>
      <form className="space-y-4">
        <div>
          <label
            htmlFor="creator"
            className="block text-sm font-medium text-gray-700"
          >
            Creator
          </label>
          <input
            type="text"
            id="creator"
            name="creator"
            placeholder="Enter creator's name"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter title"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder="Enter your message"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          ></textarea>
        </div>
        <div>
          <label
            htmlFor="imageInput"
            className="block text-sm font-medium text-gray-700"
          >
            Upload Image
          </label>
          <input
            type="file"
            id="imageInput"
            accept="image/*"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
