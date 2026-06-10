import ContactForm from "../components/ContactForm(contactPage)/ContactForm";
import WorldMap from "../components/ContactForm(contactPage)/WorldMap";
import CommonHero from "../components/PageHeroComponent/CommonHero";

export default function ContactUsPage(){
    return<>
    <CommonHero title="CONTACT US" 
    breadcrumb="Contact Us"  
    backgroundImage="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1920&q=80"
     />
    <ContactForm/>
    <WorldMap/>
    </>
}