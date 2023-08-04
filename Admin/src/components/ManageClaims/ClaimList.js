// admin/components/ManageClaims/ClaimList.js

import React from "react";

const ClaimList = () => {
  // Fetch claim data from API or context
  const claims = [
    { id: 1, name: "John Doe", status: "Pending" },
    { id: 2, name: "Jane Smith", status: "Approved" },
    // Add more claims
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">List of Insurance Claims</h2>
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="py-2">ID</th>
            <th className="py-2">Name</th>
            <th className="py-2">Status</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {claims.map((claim) => (
            <tr key={claim.id}>
              <td className="py-2">{claim.id}</td>
              <td className="py-2">{claim.name}</td>
              <td className="py-2">{claim.status}</td>
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

export default ClaimList;
