import "../styles/whatWeDo.css";
import whatWeDoImg from "../images/what-we-do.png";

export default function WhatWeDoSection() {
  return (
    <section className="whatwedo">
      <div className="whatwedo-container">
        {/* Left Content */}
        <div className="whatwedo-content">
          <span className="section-tag">WHAT WE DO</span>

          <h2>
            Innovative factory and industry <br />
            <span>solutions today</span>
          </h2>

          <div className="whatwedo-cards">
            <div className="whatwedo-card">
              <h4>Automation Solutions</h4>
              <p>Streamlining processes through cutting-edge technology.</p>
            </div>

            <div className="whatwedo-card active">
              <h4>Quality Control</h4>
              <p>Ensuring product excellence through rigorous testing.</p>
            </div>

            <div className="whatwedo-card">
              <h4>Process Engineering</h4>
              <p>Ensuring product excellence through rigorous testing.</p>
            </div>

            <div className="whatwedo-card">
              <h4>Product Development</h4>
              <p>Streamlining processes through cutting-edge technology.</p>
            </div>
          </div>

          <p className="whatwedo-footer">
            Let’s make something great work together.{" "}
            <span>Get Free Quote</span>
          </p>
        </div>

        {/* Right Image */}
        <div className="whatwedo-image">
          <img src={whatWeDoImg} alt="Industry work" />
        </div>
      </div>
    </section>
  );
}
