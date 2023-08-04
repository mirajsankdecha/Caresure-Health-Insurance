// admin/components/ManagePlans/PlanList.js

import React from "react";

const PlanList = () => {
  // Fetch plan data from API or context
  const plans = [
    { id: 1, title: "Plan 1", category: "Family" },
    { id: 2, title: "Plan 2", category: "Diabetes" },
    // Add more plans
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">
        Manage Health Insurance Plans
      </h2>
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="py-2">ID</th>
            <th className="py-2">Title</th>
            <th className="py-2">Category</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {plans.map((plan) => (
            <tr key={plan.id}>
              <td className="py-2">{plan.id}</td>
              <td className="py-2">{plan.title}</td>
              <td className="py-2">{plan.category}</td>
              <td className="py-2">
                {/* Add edit and delete buttons */}
                <button className="text-blue-600 mr-2">Edit</button>
                <button className="text-red-600">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlanList;
