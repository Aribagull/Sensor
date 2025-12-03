
import Footer from "../Components/Footer";
import HeroSection from "../Components/HeroSection";
import AnalyticsSection from "../Components/ui/AnalyticsSection";
import GetStartedSection from "../Components/ui/GetStartedSection";
import LogoRow from "../Components/ui/LogoRow";
import WhyChoose from "../Components/ui/WhyChoose";


export default function HomePage() {
  return (
   <div>
    <HeroSection/>
    <LogoRow/>
    <WhyChoose/>
    <AnalyticsSection/>
    <GetStartedSection/>
   <Footer/>
   </div>
  );
}
