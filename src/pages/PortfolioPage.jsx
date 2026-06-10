import CommonHero from "../components/PageHeroComponent/CommonHero";
import LogoLoop from "../components/LogoLoop/LogoLoop";
import AboutSection from "../components/servicepage-aboutsection/about";
import Testimonial from "../components/clientReview/clientReview";
import TeamSection from "../components/TeamSection/TeamSection";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiVite, SiAstro, SiSvelte, SiVuedotjs, SiAngular } from 'react-icons/si';
import PortfolioDetailsSection from "../components/PortfolioDetails/PortfolioDetails";
import {techLogos} from "../components/Data/Data.jsx"

export default function PortfolioPage(){
   
    return<>
      <CommonHero title="PORTFOLIO" 
    breadcrumb="Portfolio Details"  
    backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80"
    linkPath1="/"
    linkPath2="/PortfolioDetailsPage"
     />
     <PortfolioDetailsSection/>
     <div style={{ height: '200px', position: 'relative', overflow: 'hidden'}}>
                       <LogoLoop
                         logos={techLogos}
                         speed={90}
                         direction="left"
                         logoHeight={60}
                         gap={100}
                         hoverSpeed={0}
                         scaleOnHover
                         fadeOut
                         fadeOutColor="#ffffff"
                         ariaLabel="Technology partners"
                       />
                     </div>
                     <AboutSection/>
                     <Testimonial/>
                     <TeamSection/>
    
    </>
}