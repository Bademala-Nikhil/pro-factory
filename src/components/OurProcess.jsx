import "../styles/process.css";
import Process from "../images/process.jpeg";

export default function OurStorySection() {
  return (
<section className="ourprocess">
  <div className="ourprocess-inner">

    {/* LEFT IMAGE */}
    <div className="ourprocess-image">
      <img src={Process} alt="Process" />
    </div>

    {/* RIGHT CONTENT */}
    <div className="ourprocess-content">
      <span className="section-tag">OUR PROCESS</span>

      <h2>
        Streamlined processes for <br />
        <span>optimal efficiency</span>
      </h2>

      <p className="ourprocess-desc">
        Our process is designed to maximize efficiency and quality at every stage
        of production. By integrating advanced technologies and best practices,
        we ensure seamless workflows.
      </p>

      <div className="ourprocess-steps">
        <div className="step">
          <span>01</span>
          <div>
            <h4>Understanding Your Needs</h4>
            <p>
              We begin by thoroughly assessing your requirements and objectives
              to develop a tailored approach.
            </p>
          </div>
        </div>

        <div className="step active">
          <span>02</span>
          <div>
            <h4>Design and Planning</h4>
            <p>
              Our team collaborates to create detailed project plans, ensuring
              all aspects of the process.
            </p>
          </div>
        </div>

        <div className="step">
          <span>03</span>
          <div>
            <h4>Implementation</h4>
            <p>
              Utilizing advanced technologies and skilled personnel, we execute
              the project.
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

)
}