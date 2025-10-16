import HeroSection from "../Components/HeroSection";
import CompanyProfile from "../Components/CompanyProfile";
import ClientsSection from "../Components/ClientsSection";
import BlogsSection from "../Components/BlogsSection";
import ServicesSection from "../Components/ServicesSection";
import PortfolioSection from "../Components/PortfolioSection";
import TestimonialSection from "../Components/TestimonialSection";
import CalculatorSection from "../Components/CalculatorSection";
import Navbar from "../components/Navbar";

function Home() {

  return (
    <>
      <div className="w-full h-screen overflow-hidden">
        {/* <Navbar /> */}

        <div
          className="h-[88vh] overflow-y-scroll scroll-smooth"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <div className="h-screen">
            <HeroSection />
          </div>
          <div className="h-screen">
            <CompanyProfile />
          </div>
          <div className="h-screen">
            <ClientsSection />
          </div>
          <div className="h-screen">
            <ServicesSection />
          </div>
          <div className="h-screen">
            <BlogsSection />
          </div>
          <div className="h-screen">
            <PortfolioSection />
          </div>
          <div className="h-screen">
            <TestimonialSection />
          </div>
          <div className="">
            <CalculatorSection />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
