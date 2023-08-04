// admin/components/ManagePlans/PlanForm.js

import React, { useState } from "react";

const PlanForm = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, API call, etc.
  };

  return (
    <div>
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
            className="w-full border rounded py-2 px-3"
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
            className="w-full border rounded py-2 px-3"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Add Plan
        </button>
      </form>
    </div>
  );
};

export default PlanForm;
