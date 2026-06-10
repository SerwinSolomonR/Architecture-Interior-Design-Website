import BlogLayout from "../components/BlogLayout/BlogLayout";
import CommonHero from "../components/PageHeroComponent/CommonHero";

export default function BlogPage(){
    return<>
     <CommonHero title="OUR BLOG" 
    breadcrumb="Our Blog"  
    backgroundImage="https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=2000&auto=format&fit=crop"
     />
    <BlogLayout/>
    </>
}