import React, { useState } from "react";
import { FiCheckSquare } from "react-icons/fi"; // Import icons

const PlanForm = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, API call, etc.
  };

  return (
    <div className="bg-gray-100 p-4 rounded">
      <h2 className="text-xl font-semibold mb-4">
        Add New Health Insurance Plan
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block font-semibold mb-1">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border rounded py-2 px-3 focus:outline-none focus:ring focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="category" className="block font-semibold mb-1">
            Category
          </label>
          <input
            type="text"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border rounded py-2 px-3 focus:outline-none focus:ring focus:border-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 flex items-center"
        >
          <FiCheckSquare className="mr-2" /> Add Plan
        </button>
      </form>
    </div>
  );
};

export default PlanForm;
