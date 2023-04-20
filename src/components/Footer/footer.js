import React from "react";
import "./footerStyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="sb_footer section_padding">
        <div className="sb_footer-links">
          <div className="sb_footer-links-div">
            <h4>For Business</h4>
            <a href="/employer">
              <p>Employer</p>
            </a>
            <a href="/healthplan">
              <p>Health Plan</p>
            </a>
            <a href="/individual">
              <p>Individual</p>
            </a>
          </div>
          <div className="sb_footer-links_div">
            <h4>Resources</h4>
            <a href="/resource">
              <p>Resource center</p>
            </a>

            <a href="/resource">
              <p>Testimonials</p>
            </a>

            <a href="/resource">
              <p>STV</p>
            </a>
          </div>
          <div>
            <h4>Partners</h4>
            <a href="/resource">
              <p>Swing Tech</p>
            </a>

            <a href="/resource">
              <p>Testimonials</p>
            </a>

            <a href="/resource">
              <p>STV</p>
            </a>
          </div>
          <div>
            <h4>Company</h4>
            <a href="/about">
              <p>About</p>
            </a>

            <a href="/resource">
              <p>Press</p>
            </a>

            <a href="/resource">
              <p>Career</p>
            </a>

            <a href="/resource">
              <p>Contact</p>
            </a>
          </div>
          <div>
            <h4>Coming soon on</h4>
            <a href="/resource">
              <p>Facebook</p>
            </a>

            <a href="/resource">
              <p>Twitter</p>
            </a>

            <a href="/resource">
              <p>Instagram</p>
            </a>
          </div>
        </div>

        <hr>
        </hr>

        <div className="sb_footer-below">
            <div className="sb_footer-copyright">
                <p>
                    @{new Date().getFullYear()} Project42Labs. All rights reserved.
                </p>
            </div>
            <div className="sb_footer-below-links">
            <a href="/resource">
              <p>Terms & Conditions</p>
            </a>
            <a href="/resource">
              <p>Privacy</p>
            </a>
            <a href="/resource">
              <p>Security</p>
            </a>
            <a href="/resource">
              <p>Cookies</p>
            </a>
            </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
