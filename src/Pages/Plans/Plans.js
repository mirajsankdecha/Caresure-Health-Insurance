import React from "react";
import Header from "./Header";
import Stat from "./Stat";
import Infocard from "./Infocard";
import Hplan from "./Hplan";
import OnlineBenefit from "./OnlineBenefit";
import WhatHI from "./WhatHI";
import Info1 from "./Info1";
import Info2 from "./Info2";
import Accordion from "./Accordian";

const Plans = () => {
  return (
    <div>
      <Header />
      <Stat /> 
      <Infocard /> 
      <Hplan /> 
      <OnlineBenefit /> 
      <WhatHI/> 
      <Info1 /> 
      <Info2 /> 
      <Accordion />
    </div>
  );
};

export default Plans;
