import "../Styles/Footer.css";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer__container">
          <div className="footer__container__left"></div>
          <div className="footer__container__right">
            <div className="footer_right_img"></div>
            <div className="footer_right_text">
              Join the Revolution and Turn Your Passion for Fitness into a
              Lucrative Career with Digifitness!
            </div>
            <div className="footer_right_button">
              <span>Join Now</span>
              <div className="straight_Arrow "></div>
            </div>
          </div>
        </div>

        <div className="footer_services">
          <div className="footer_services_container">
            <div className="footer_services_container_left">
              <div className="logo small_size"> </div>
              <p>
                We’re always in search for talented and motivated people, Don’t
                be shy introduce yourself
              </p>
              <div className="link_box"></div>
              <div className="contact_us_footer">
                <span>Contact with us</span>
                <div id="arrow-1"></div>
              </div>
            </div>
            <div className="footer_services_container_mid">
              <table>
                <tr>
                  <th>Useful Links</th>
                  <th>Contact Us</th>
                </tr>
                <tr>
                  <td>
                    <a href="#">Marketplace</a>
                  </td>
                  <td>
                    <a href="#">Become Teacher</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="#">Kindergarden</a>
                  </td>
                  <td>
                    <a href="#">Blog</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="#">University</a>
                  </td>
                  <td>
                    <a href="#">Instructor</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="#">GYM Coaching</a>
                  </td>
                  <td>
                    <a href="#">Events</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="#">FAQ</a>
                  </td>
                  <td>
                    <a href="#">Course</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="#">About Us</a>
                  </td>
                  <td>
                    <a href="#">Carrier Page</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="#">Privacy Policy</a>
                  </td>
                </tr>
              </table>
            </div>
            <div className="footer_services_container_right">
              <h2>Get Contact</h2>
              <p>Phone: (406) 555-0120</p>
              <p>E-mail: Admin@example.com</p>
              <h2>Newsletter</h2>
              <span>
                2000+ Our students are subscribe around the world. Don't be shy
                introduce yourself!
              </span>
              <div className="subscribe">
                <input type="email" name="email-id" id="email-id" placeholder="Enter Your Email Here"/>
                <input type="submit" value="Subscribe" id="submit_button"/>
              </div>
            </div>
          </div>
        </div>

        <div className="Copyright">
            <div className="owner">
                <div className="left_owner">
                    <p>Copyright © 2023 <span>Krunal Modi.</span></p>
                    <p>All Rights Reserved</p>
                </div>
                <div className="right_owner">
                    <ul>
                        <li><a href="#">Terms of service</a></li>
                        <li><a href="#">Privacy policy</a></li>
                        <li><a href="#">Subscription</a></li>
                        <li><a href="#">Login & Register</a></li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}
