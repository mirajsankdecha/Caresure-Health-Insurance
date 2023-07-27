import React from "react";
import { useParams } from "react-router-dom";
import Hplandata from "./Hplandata.json";
import Header from "./Header";
import QL from "./plansdata/QL";
import Hightlight from "./plansdata/Hightlight";
import Detaillist from "./plansdata/Detaillist";
import GetStarted from "./plansdata/GetStarted";
import Banner from "./plansdata/Banner";
import Review from "../Home/Review";
import Accordion from "./Accordian";

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
      <QL /> 
      <Hightlight /> 
      <Detaillist />  
      <Review />
      <Banner /> 
      <GetStarted /> 
      <Accordion />
    </div>
  );
};

export default PlanDetailPage;
