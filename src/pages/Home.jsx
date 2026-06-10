import Hero from "../components/hero/hero"
import Welcome from "../components/welcome_section/welcome"
import PortfolioSection from "../components/portfollio_section/PortfolioSection"
import Services from "../components/Services/Services"
import WatchSection from "../components/watchSection/WatchSection"
import TeamSection from "../components/TeamSection/TeamSection"
import Testimonial from "../components/clientReview/clientReview"
import NewsSection from "../components/NewsSection/NewsSection"
 
const Home = () => {
  return (
    <>
      <Hero />
      <Welcome />
      <PortfolioSection />
      <Services />
      <WatchSection />
      <TeamSection />
      <Testimonial />
      <NewsSection />
    </>
  )
}

export default Home