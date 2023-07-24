import React from "react";
import { useParams } from "react-router-dom";
import Hplandata from "./Hplandata.json";
import Header from "./Header";

const PlanDetailPage = () => {
  const { id } = useParams();

  // Convert the id to a number using parseInt
  const planId = parseInt(id);

  // Find the specific plan data based on the "planId"
  const plan = Hplandata.find((item) => item.id === planId);

  if (!plan) {
    // Handle the case when the plan with the specified "planId" is not found
    return <div>Plan not found</div>;
  }

  return (
    <div>
      <Header />
    </div>
  );
};

export default PlanDetailPage;
