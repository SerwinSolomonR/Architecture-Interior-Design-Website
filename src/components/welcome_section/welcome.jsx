import "./welcome.css";
import { useOnScreen } from "../../CustomHooks/useOnScreen";

export default function Welcome() {
  const [smallRef, smallVisible] = useOnScreen();
  const [largeRef, largeVisible] = useOnScreen();

  return ( <>
    <section className="welcome">

      <div className="welcome-header">
        <h2>
          WELCOME TO <span>CODESIGN</span>
        </h2>
        <div className="wave"></div>
      </div>

      <div className="welcome-content">
        <div className="welcome-images">
        <img
           ref={smallRef}
           src="https://images.unsplash.com/photo-1505691938895-1758d7feb511"
           className={`img-small hidden slide-down ${smallVisible ? "show" : ""}`}
           alt=""
         />
   
        <img
           ref={largeRef}
           src="https://images.unsplash.com/photo-1497366216548-37526070297c"
           className={`img-large hidden slide-up ${largeVisible ? "show" : ""}`}
           alt=""
         />
        </div>

        <div className="welcome-text">
          <h3>We Design & Create Best Architect Around The World With Inspiration</h3>

          <div className="experience-box">
            <span>25+</span>
            <p>YEARS OF EXPERIENCE</p>
          </div>

          <p className="desc">Aliquam erat volutpat. Nunc erat massa, porttitor vel egestas sit amet, tristique at massa. Donec posuere odio neque, in ultricies lorem aliquet eu. Donec venenatis libero Link nulla placerat egestas. Etiam condimentum tortor vel faucibus aliquam. Sed et auctor orci. Morbi nec cursus quam.</p>
          <p className="desc"> Praesent eu suscipit ex, quis pulvinar sem. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
          <br/>
          <button className="read-btn-welcome">READ MORE</button>
        </div>
      </div>
    </section>
    </>
  );
}