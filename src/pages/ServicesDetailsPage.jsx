import CommonHero from "../components/PageHeroComponent/CommonHero";
import BreadcrumbHero from "../components/ServicesDetailsbredHero/Breadcrumhero";
import LogoLoop from "../components/LogoLoop/LogoLoop";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';
import TeamSection from "../components/TeamSection/TeamSection";
import {techLogos} from "../components/Data/Data.jsx"



export default function ServiceDetailsPage(){
   
    return(<>
    <CommonHero title="SERVICE DETAILS" 
    breadcrumb="Services"  
    backgroundImage="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1920&q=80"
    linkPath1={"/"}
    linkPath2={"/services"}
    />

        <BreadcrumbHero/>
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
                <TeamSection/>
    </>)
}