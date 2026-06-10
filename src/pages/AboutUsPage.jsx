import Testimonial from "../components/clientReview/clientReview";
import NewsSection from "../components/NewsSection/NewsSection";
import PortfolioSection from "../components/portfollio_section/PortfolioSection";
import TeamSection from "../components/TeamSection/TeamSection";
import Welcome from "../components/welcome_section/welcome";
import CommonHero from "../components/PageHeroComponent/CommonHero";
import StatsSection from "../components/NumCountSection/NumCount";
import Features from "../components/BestFeaturesComponent/Features";
export default function AboutUsPage(){
    return<>
     <CommonHero title="ABOUT US" 
    breadcrumb="About Us"  
    backgroundImage="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&q=80&w=1920"
/>
<Welcome/>
<StatsSection/>
<Features/>
<PortfolioSection/>
<TeamSection/>
<Testimonial/>
<NewsSection/>
</>
}