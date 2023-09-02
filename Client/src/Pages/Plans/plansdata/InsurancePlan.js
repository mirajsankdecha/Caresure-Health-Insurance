import React from "react";

const InsurancePlan = ({ planName, premiums }) => {
  if (!planName || !premiums) {
    // Handle the case where planName or premiums are not defined
    return <div>Plan information is missing.</div>;
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">Insurance Plan</h2>
      <div className="mb-4">
        <p className="text-lg text-gray-600">Plan Name:</p>
        <p className="text-xl font-semibold">{planName}</p>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-gray-100 table-auto">
          <thead>
            <tr className="bg-gray-200">
              <th className="text-left py-2 px-4">Policy Term</th>
              <th className="text-center py-2 px-4">Sum Insured</th>
              <th className="text-center py-2 px-4">Monthly Premium</th>
              <th className="text-center py-2 px-4">Yearly Premium</th>
              <th className="text-center py-2 px-4">Premium (Without Tax)</th>
              <th className="text-center py-2 px-4">Premium (With Tax)</th>
            </tr>
          </thead>
          <tbody>
            {premiums.map((premiumData) => (
              <tr key={premiumData.year} className="border-b border-gray-300">
                <td className="text-left py-2 px-4">
                  {premiumData.year} years
                </td>
                <td className="text-center py-2 px-4">
                  ₹{premiumData.sumInsured.toLocaleString("en-IN")}
                </td>
                <td className="text-center py-2 px-4">
                  ₹
                  {Math.round(premiumData.premiumWithTax / 12).toLocaleString(
                    "en-IN"
                  )}
                </td>
                <td className="text-center py-2 px-4">
                  ₹{premiumData.premiumWithTax.toLocaleString("en-IN")}
                </td>
                <td className="text-center py-2 px-4">
                  ₹{premiumData.premiumWithoutTax.toLocaleString("en-IN")}
                </td>
                <td className="text-center py-2 px-4">
                  ₹{premiumData.premiumWithTax.toLocaleString("en-IN")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InsurancePlan;
