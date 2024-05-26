import React from "react";
import "./style.css";
export default function Footer() {
  return (
    <div>
      {/* header 7 newletter */}
      <div className="newsletter">
        <div className="container">
          <div className="text-center">
            <h6>Newsletter</h6>
            <h4>Subscribe To Our Newsletter</h4>
            <p>
              Stay up-to-date with the latest news, trends, and tips in digital
              marketing by subscribing to our newsletter. Get exclusive
              insights, special offers, and more delivered straight to your
              inbox. Don't miss out – subscribe now!
            </p>
          </div>
          <form class="newsletter-form">
            <input
              type="text"
              class="input-newsletter"
              placeholder="Enter your email address"
              name="EMAIL"
              required=""
            />
            <button type="submit" class="btn learn-more-btn">
              Subscribe Now
            </button>
          </form>
        </div>
      </div>
      <div className="footer">
        <div className="container footer-text">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              <h3>AboutUs</h3>
              <p>
                We are dedicated to helping businesses
                like yours thrive in the digital age. Our mission is to provide
                innovative and effective digital marketing solutions that drive
                growth and maximize your online presence. With a team of
                experienced professionals, we work tirelessly to understand your
                business goals and deliver customized strategies to achieve
                them.
              </p>
            </div>
            <div className="col-lg-2 col-md-6 col-12">
              <h3>Links</h3>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/Aboutus">About Us</a>
                </li>
                <li>
                  <a href="/Services">Services</a>
                </li>
                <li>
                  <a href="/Price">Price</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 col-12">
              <h3> Links</h3>
              <ul>
                <li>
                  <a href="/">Career</a>
                </li>
                <li>
                  <a href="/team">Team</a>
                </li>
                <li>
                  <a href="/Contactus">Contact Us</a>
                </li>
                <li>
                  <a href="/">FAQ</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <h3>Address</h3>
              <ul>
                <li>Nagpur, Maharashtra, India</li>
                <li>+91 7395420158</li>
                <li>contact@gmail.com</li>
                <li>+3214569870</li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div className="footer-end">
          <h6 className="text-center">Design & Developed by Rishiraj</h6>
        </div>
      </div>
    </div>
  );
}
