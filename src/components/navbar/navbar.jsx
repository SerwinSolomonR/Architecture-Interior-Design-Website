import { useState } from "react";
import { FiPhone, FiMail, FiMapPin,FiSearch } from "react-icons/fi";
import "./navbar.css"
import { Link } from 'react-router-dom';
export default function Navbar(){

    const [open, setOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [closing, setClosing] = useState(false);
    const [mailOpen, setMailOpen] = useState(false);
    const [mailClosing, setMailClosing] = useState(false);

    const closeSearch = () => {
      setClosing(true);
  
      setTimeout(() => {
        setSearchOpen(false);
        setClosing(false);
      }, 300); 
    };

    const closeMail = () => {
      setMailClosing(true);

      setTimeout(() => {
        setMailOpen(false);
        setMailClosing(false);
      }, 300);
    };

    return <>
    <div className="navbarcustom">
      <div className="navbarcustom-container">
        <div className="menu-btn" onClick={() => setOpen(true)}>☰</div>
        <div className="nav-elements">
            <ul className="nav-links">
                   
                    <Link to="/"><li>HOME</li></Link>
                    
                    <Link to="/AboutUs"><li>ABOUT US</li></Link>
                    
                    <Link to="/Portfolio"><li>PORTFOLIO</li></Link>

                    <div className="logo">
                        <span>Codesign</span>
                        <p>ARCHITECTURE</p>
                    </div>
                    <li><Link to="/services">SERVICES</Link></li>

                    <li><Link to="/Blog">BLOG</Link></li>
                    <li><Link to="/ContactUs">CONTACT US</Link></li>

            </ul>
        </div>

        <div className="navendicons">
                <div className="searchicon" onClick={() => setSearchOpen(true)}><FiSearch/></div>
                <div className="newsletter" onClick={() => setMailOpen(true)} style={{cursor:"pointer"}}> <FiMail/></div>
        </div>
      </div>  
    </div> 

      {/* sidebar content */}
    <div className={`sidebar ${open ? "active" : ""}`}>
      <div className="logo-sidebar">
            <span>Codesign</span>
            <p>ARCHITECTURE</p>
            <br/>
      </div >
      <div className="content-sidebar">
            <div className="csh">ABOUT US</div>
            <p className="csp">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, aliquam, quaerat est assumenda suscipit exercitationem sequi odio quis obcaecati voluptas nobis fugit impedit ut temporibus accusamus minus harum! Aut, quas.</p>
            <button className="read-btn">READ MORE</button>
            <hr />

            <div className="contact-section">
              <h3 className="csh">CONTACT INFO</h3>
              <div className="contact-item">
                <div className="icon-box"><FiPhone/></div>
                <div>
                  <h4>CALL NOW</h4>
                  <p>+91 123 456 7890,<br />+91 987 654 3210</p>
                </div>
              </div>
       
            <div className="contact-item">
              <div className="icon-box"><FiMail/></div>
              <div>
                <h4>LOCATION</h4>
                <p>info@gmail.com,<br />services@gmail.com</p>
              </div>
            </div>
       
            <div className="contact-item">
              <div className="icon-box"><FiMapPin/></div>
              <div>
                <h4>EMAIL NOW</h4>
                <p>15/B Miranda House,<br />New York, US</p>
                <br />
                <br />
              </div>
           
            </div>
            </div>
      </div>  
    </div>

      {/* Overlay */}
      {open && <div className="overlay" onClick={() => setOpen(false)} />}

      {/* Search Button */}
      {/* SEARCH OVERLAY */}
         {searchOpen && (
        <div className={`search-overlay ${closing ? "closing" : ""}`}>
          <span className="close-search" onClick={closeSearch}>✕</span>

          <div className="search-box">
            <input type="text" placeholder="Enter Your Keyword ..." />
          </div>
        </div>
      )}

{mailOpen && (
  <div className={`mail-overlay ${mailClosing ? "closing" : ""}`}>
    <div className="mail-backdrop" onClick={closeMail}></div>
    <div className="mail-panel">
      <span className="close-mail" onClick={closeMail}>✕</span>
      <div className="mail-left">
        <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000&auto=format&fit=crop" />
      </div>
      <div className="mail-right">
        <h2>SUBSCRIBE TO OUR NEWSLETTER</h2>
        <input type="text" placeholder="Your Name" />
        <input type="mail" placeholder="Enter your Mail" />
        <button className="send-btn">SUBSCRIBE NOW</button>
      </div>

    </div>
  </div>
)}     
    </>
    
}
