// admin/components/ManagePlans.js

import React from "react";
import PlanList from "./PlanList";
import PlanForm from "./PlanForm";

const ManagePlans = () => {
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-4">
        Manage Health Insurance Plans
      </h1>
      <div className="grid grid-cols-2 gap-6">
        <PlanList />
        <PlanForm />
      </div>
    </div>
  );
};

export default ManagePlans;
