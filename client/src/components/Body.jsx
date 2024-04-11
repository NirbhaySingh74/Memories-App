import Form from "./Form";
import Posts from "./Posts";

const Body = () => {
  return (
    <div className="flex">
      <Posts />
      <Form />
    </div>
  );
};

export default Body;
