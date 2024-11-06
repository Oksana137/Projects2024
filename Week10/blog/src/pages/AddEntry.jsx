import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddEntry = () => {
  const [formData, setFormData] = useState({
    title: "",
    cover: "",
    content: "",
    author: "Oksana",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const addHandle = function (e) {
    e.preventDefault();
    if (
      !formData.title ||
      !formData.cover ||
      !formData.content ||
      !formData.author
    ) {
      console.log("Title, cover, content, author are required!");
      return;
    }

    axios
      .post(`${import.meta.env.VITE_API}/posts`, formData)
      .then(function (response) {
        navigate("/");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <form className="card bg-base-100 w-96 shadow-xl gap-8 p-8 m-auto">
      <input
        type="text"
        name="title"
        value={formData.title}
        placeholder="Title"
        onChange={handleChange}
        className="input input-bordered input-md w-full max-w-lg"
      />
      <input
        type="text"
        name="cover"
        value={formData.image}
        placeholder="Image"
        onChange={handleChange}
        className="input input-bordered input-md w-full max-w-lg"
      />
      <textarea
        type="text"
        name="content"
        value={formData.content}
        placeholder="Content"
        onChange={handleChange}
        className="textarea textarea-bordered"
      ></textarea>
      <button className="btn btn-active" onClick={addHandle}>
        Add Entry
      </button>
    </form>
  );
};

export default AddEntry;
