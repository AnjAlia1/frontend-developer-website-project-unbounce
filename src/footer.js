import { FaTwitterSquare } from "react-icons/fa";
import { AiFillLinkedin, AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { CgCrowdfire } from "react-icons/cg";
// AiFillLinkedin; CgCrowdfire

const Footer = () => {
  return (
    <div className="footer-section">
      <img src="https://unbounce.com/wp-content/themes/unbounce2019/assets/img/unbounce-footer-icon-dark.svg"></img>
      <div>
        <ul className="footer-links">
          <li>
            <h5>Product</h5>
            <ul className="footer-link">
              <li>Smart Builder</li>
              <li>Smart Traffic</li>
              <li>Smart Copy</li>
              <li>Apps and Integrations</li>
              <li>Landing Pages</li>
              <li>Popups and Sticky Bars</li>
              <li>Landing Page Templates</li>
              <li>Smart Copy Templates</li>
              <li>Product Security</li>
              <li>How We Compare</li>
            </ul>
          </li>
          <li>
            <h5>Solutions</h5>
            <ul className="footer-link">
              <li>Ecommerce</li>
              <li>SaaS</li>
              <li>Agency</li>
              <li>Small Businesses</li>
              <li>B2B Marketing</li>
              <li>Professional Services</li>
              <li>PPC</li>
              <li>Social Ads</li>
              <li>Email Marketing</li>
              <li>Lead Generation</li>
            </ul>
          </li>
          <li>
            <h5>Company</h5>
            <ul className="footer-link">
              <li>About Unbounce</li>
              <li>Partner Program</li>
              <li>Careers</li>
              <li>Integrate with Us</li>
            </ul>
          </li>
          <li>
            <h5>Learn</h5>
            <ul className="footer-link">
              <li>Watch Smart Builder Demo</li>
              <li>What is Conversion Intelligence?</li>
              <li>Landing Page Basics</li>
              <li>Blog</li>
              <li>Resource Center</li>
              <li>Landing Page Examples</li>
              <li>How to Build a Landing Page</li>
            </ul>
          </li>
          <li>
            <h5>Get in Touch</h5>
            <ul className="footer-link">
              <li>Contact</li>
              <li>Demo</li>
              <li>Log In</li>
              <li>Help Center</li>
              <li>Community</li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="copyright-container">
        <div className="footer-copyright">
          <span>© 2010-2023 Unbounce. All rights reserved.</span>
        </div>
        <div className="footer-terms-social">
          <div className="footer-terms">
            <ul>
              <li>
                <a href="#" target="_blank">
                  Security
                </a>
                <a href="#" target="_blank">
                  Privacy Policy
                </a>
                <a href="#" target="_blank">
                  Terms Of Service
                </a>
                <a href="#" target="_blank">
                  CCPA
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-social">
            <ul>
              <li>
                <a href="" target="_blank">
                  <FaTwitterSquare />
                </a>
                <a href="" target="_blank">
                  <AiFillLinkedin />
                </a>
                <a href="" target="_blank">
                  <CgCrowdfire />
                </a>
                <a href="" target="_blank">
                  <AiFillInstagram />
                </a>
                <a href="" target="_blank">
                  <AiFillYoutube />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
