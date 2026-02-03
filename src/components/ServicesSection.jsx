import bgServices from "../images/service-bg.png";
import "../styles/services.css";

export default function ServicesSection() {
  return (
    <section
      className="services-bg"
      style={{ backgroundImage: `url(${bgServices})` }}
    >
      <div className="services-overlay"></div>

      {/* Heading */}
       

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
