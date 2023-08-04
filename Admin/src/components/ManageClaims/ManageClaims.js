// admin/components/ManageClaims.js

import React from "react";
import ClaimList from "./ClaimList";
import ClaimForm from "./ClaimForm";

const ManageClaims = () => {
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-4">Manage Insurance Claims</h1>
      <div className="grid grid-cols-2 gap-6">
        <ClaimList />
        <ClaimForm />
      </div>
    </div>
  );
};

export default ManageClaims;
