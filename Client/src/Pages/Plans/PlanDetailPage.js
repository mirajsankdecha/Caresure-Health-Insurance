import React from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import QL from "./plansdata/QL";
import Hightlight from "./plansdata/Hightlight";
import Detaillist from "./plansdata/Detaillist";
import GetStarted from "./plansdata/GetStarted";
import Banner from "./plansdata/Banner";
import Review from "../Home/Review";
import Accordion from "./Accordian";
import InsurancePlan from "./plansdata/InsurancePlan";
import InsurancePlanData from "./plansdata/InsurancePlanData.json"; // Import the JSON data
import GeneralTerms from "./plansdata/GeneralTerms";
import PlanPurchase from "./plansdata/PlanPurchase";

const PlanDetailPage = () => {
  const { id } = useParams();
  const planId = parseInt(id);

  const plan = InsurancePlanData.find((item) => item.id === planId);

  if (!plan) {
    return <div>Plan not found</div>;
  }

  return (
    <div>
      <Header />
      <QL />
      <Hightlight />
      <Detaillist />
      <InsurancePlan planName={plan.planName} premiums={plan.premiums} />
      <PlanPurchase /> {/* Include PlanPurchase component */}
      <GeneralTerms />
      <Review />
      <Banner />
      <GetStarted />
      <Accordion />
    </div>
  );
};

export default PlanDetailPage;
