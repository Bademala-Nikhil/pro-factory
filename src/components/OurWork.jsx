import "../styles/ourWork.css";

import img1 from "../images/work-1.jpeg";
import img2 from "../images/work-2.jpeg";
import img3 from "../images/work-3.jpeg";
import img4 from "../images/work-4.jpeg";

export default function OurWork() {
  return (
    <section className="ourwork">
      <div className="ourwork-header">
        <span className="section-tag">OUR WORK</span>

        <div className="ourwork-title">
          <h2>
            Our successful project <br />
            <span>initiatives</span>
          </h2>

          <p>
            Our successful project initiatives showcase our commitment to
            excellence and innovation across various industries.
          </p>
        </div>
      </div>

      {/* FILTER */}
      <div className="ourwork-filter">
        <span className="active">All</span>
        <span>Automation</span>
        <span>Development</span>
        <span>Infrastructure</span>
        <span>Manufacturing</span>
        <span>Sustainability</span>
      </div>

      {/* GRID */}
      <div className="ourwork-grid">
        <div className="ourwork-card">
          <img src={img1} alt="" />
          <p>Total Quality Management Implementation</p>
        </div>

        <div className="ourwork-card">
          <img src={img2} alt="" />
          <p>Advanced Research In Material Science</p>
        </div>

        <div className="ourwork-card">
          <img src={img3} alt="" />
          <p>Workplace Safety Enhancement</p>
        </div>

        <div className="ourwork-card">
          <img src={img4} alt="" />
          <p>Smart Automation Deployment</p>
        </div>
      </div>
    </section>
  );
}
