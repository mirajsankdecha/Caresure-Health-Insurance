// admin/components/ManagePlans.js
import React from "react";
import PlanList from "./PlanList";
import PlanForm from "./PlanForm";
import { RiAddCircleLine } from "react-icons/ri"; // Import icons

const ManagePlans = () => {
  return (
    <div className="bg-white rounded shadow p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-semibold">
          Manage Health Insurance Plans
        </h1>
        <button className="flex items-center text-blue-500 hover:text-blue-600">
          <RiAddCircleLine className="mr-2" /> Add Plan
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <PlanList />
        <PlanForm />
      </div>
    </div>
  );
};

export default ManagePlans;
