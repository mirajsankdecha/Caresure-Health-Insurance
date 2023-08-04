import React from "react";
import AdminSectionCard from "./AdminSectionCard";

const TotalPremiumCard = () => {
  // Calculate total premium amount (example)
  const totalPremium = 120000;

  return (
    <AdminSectionCard title="Total Premium Amount">
      <p className="text-lg font-semibold">${totalPremium}</p>
    </AdminSectionCard>
  );
};

export default TotalPremiumCard;
