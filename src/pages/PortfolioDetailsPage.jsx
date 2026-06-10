import ConstructionSection from "../components/ConstructionSection/ConstructionSection";
import CommonHero from "../components/PageHeroComponent/CommonHero";
import RelatedWorks from "../components/RelatedWorksSection/RelatedWorks";

export default function  PortfolioDetailsPage(){
    return<>
     <CommonHero title="PORTFOLIO DETAILS" 
    breadcrumb="Portfolio"  
    backgroundImage="https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=1920&q=80"
    linkPath1="/"
    linkPath2="/Portfolio"
     />
    <ConstructionSection/>
    <RelatedWorks/>
    </>
}