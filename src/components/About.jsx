import imgMain from "../images/about-main.jpeg";
import imgTop from "../images/about-top.jpeg";
import "../styles/about.css";

export default function About() {
  return (
    <section className="about">
      <div className="about-container">

        {/* LEFT IMAGE STACK */}
        <div className="about-images">
          <img src={imgTop} alt="Factory automation" className="img-top" />
          <img src={imgMain} alt="Industrial engineer" className="img-main" />

          <div className="experience-badge">
            <h3>25+</h3>
            <p>Year Of<br />Experience</p>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="about-content">
          <span className="about-label">ABOUT US</span>

          <h2>
            Building quality through <br />
            <span>industrial innovation</span>
          </h2>

          <p className="about-text">
            At the heart of our operations is a commitment to delivering superior
            products through cutting-edge technology and innovative processes.
          </p>

          <ul className="about-list">
            <li>✔ Sustainable Manufacturing</li>
            <li>✔ Advanced Automation</li>
            <li>✔ Efficient Production Processes</li>
            <li>✔ Reliable Delivery Services</li>
          </ul>

          <button className="about-btn">
            Learn More <span>→</span>
          </button>
        </div>

      </div>
    </section>
  );
}
