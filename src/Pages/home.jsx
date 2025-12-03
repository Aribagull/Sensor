
import Footer from "../Components/Footer";
import HeroSection from "../Components/HeroSection";
import Testimonial from "../Components/Testimonial";
import AnalyticsSection from "../Components/ui/AnalyticsSection";
import GetStartedSection from "../Components/ui/GetStartedSection";
import LogoRow from "../Components/ui/LogoRow";
import WhyChoose from "../Components/ui/WhyChoose";
import WorkSection from "../Components/ui/WorkSection";


export default function HomePage() {
  return (
   <div className="bg-black">
    <HeroSection/>
    <LogoRow/>
    <WhyChoose/>
    <WorkSection/>
    <AnalyticsSection/>
    <Testimonial/>
    <GetStartedSection/>
   
   </div>
  );
}
