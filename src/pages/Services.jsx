import React from "react";
import ServicesHero from "../Components/ServicesHero";
import ServiceIntroSection from "../Components/ServiceIntroSection";
import ServiceCategorySection from "../Components/ServiceCategorySection";
import Technologies from "../Components/Technologies";
import IdeaDiscussForm from "../Components/IdeaDiscussForm";
import DevelopmentProcess from "../../../DevelopmentProcess";

const Services = () => {
  return (
    <div>
      <ServicesHero />
      <ServiceIntroSection />
      <ServiceCategorySection />
      <Technologies />
      <DevelopmentProcess/>
      <IdeaDiscussForm />
    </div>
  );
};

export default Services;
