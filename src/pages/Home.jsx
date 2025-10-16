import HeroSection from "../Components/HeroSection";
import CompanyProfile from "../Components/CompanyProfile";
import ClientsSection from "../Components/ClientsSection";
import BlogsSection from "../Components/BlogsSection";
import ServicesSection from "../Components/ServicesSection";
import PortfolioSection from "../Components/PortfolioSection";
import TestimonialSection from "../Components/TestimonialSection";
import IdeaDiscussForm from "../Components/IdeaDiscussForm";

function Home() {
  return (
    <>
      
        <div>
          <HeroSection />
          <CompanyProfile />
          <PortfolioSection />
          <ServicesSection />
          <ClientsSection />
          <IdeaDiscussForm />
          <BlogsSection />
          <TestimonialSection />
        </div>
     
    </>
  );
}

export default Home;
