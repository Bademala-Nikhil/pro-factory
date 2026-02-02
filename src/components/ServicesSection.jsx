import bgServices from "../images/services-bg.jpeg";
import "../styles/services.css";

export default function ServicesSection() {
  return (
    <section
      className="services-bg"
      style={{ backgroundImage: `url(${bgServices})` }}
    >
      <div className="services-overlay"></div>

      {/* Heading */}
      <div className="services-content">
        <span className="section-tag">SERVICES</span>
        <h2>
          Comprehensive solutions <br />
          <span>for industrial excellence</span>
        </h2>
      </div>

      {/* Cards */}
      <div className="services-card">
        <div className="service-box">
          <p>Custom Manufacturing Solution</p>
          <button>→</button>
        </div>

        <div className="service-box">
          <p>Industrial Automation And Robotics</p>
          <button>→</button>
        </div>

        <div className="service-box">
          <p>Product Design And Prototyping</p>
          <button>→</button>
        </div>

        <div className="service-box">
          <p>Equipment Maintenance Support</p>
          <button>→</button>
        </div>
      </div>
    </section>

    
  );
}
