import Testimonial from "../components/clientReview/clientReview";
import LogoLoop from "../components/LogoLoop/LogoLoop";
import AboutSection from "../components/servicepage-aboutsection/about";
import ServicesHero from "../components/servicePageHero/PageHeader";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';
import TeamSection from "../components/TeamSection/TeamSection";
import CommonHero from "../components/PageHeroComponent/CommonHero";
import {techLogos} from "../components/Data/Data.jsx"

 
export default function ServicePage(){
  
    return<>
     <CommonHero title="OUR SERVICES" 
        breadcrumb="Service Details" 
        backgroundImage="https://images.unsplash.com/photo-1505691938895-1758d7feb511"
        linkPath1="/"
        linkPath2={"/serviceDetails"}
      />
    <ServicesHero/>
    <div style={{ height: '200px', position: 'relative', overflow: 'hidden'}}>
          <LogoLoop
            logos={techLogos}
            speed={100}
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