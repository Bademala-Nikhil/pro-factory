import "../styles/pricing.css";

export default function Pricing() {
  return (
<section className="pricing-plan">
  <div className="pricing-inner">

    {/* HEADING */}
    <div className="pricing-heading">
      <span className="section-tag">PRICING PLAN</span>
      <h2>
        Transparent pricing for <br />
        <span>every solution</span>
      </h2>
      <p>
        We believe in providing clear and upfront pricing to ensure that you
        understand the value of our services.
      </p>
    </div>

    {/* PRICING CARDS */}
    <div className="pricing-cards">

      {/* LEFT CARD */}
      <div className="pricing-card">
        <h3>$39 <span>/month</span></h3>
        <h4>Advanced Plan</h4>

        <ul>
          <li>Standard Manufacturing Services</li>
          <li>Quality Control Checks</li>
          <li>Technical Support</li>
          <li>Monthly Progress Reports</li>
        </ul>

        <button>Purchase Now</button>
      </div>

      {/* MIDDLE CARD */}
      <div className="pricing-card active">
        <h3>$39 <span>/month</span></h3>
        <h4>Advanced Plan</h4>

        <ul>
          <li>Standard Manufacturing Services</li>
          <li>Quality Control Checks</li>
          <li>Technical Support</li>
          <li>Monthly Progress Reports</li>
        </ul>

        <button>Purchase Now</button>
      </div>

      {/* RIGHT CARD */}
      <div className="pricing-card">
        <h3>$39 <span>/month</span></h3>
        <h4>Advanced Plan</h4>

        <ul>
          <li>Standard Manufacturing Services</li>
          <li>Quality Control Checks</li>
          <li>Technical Support</li>
          <li>Monthly Progress Reports</li>
        </ul>

        <button>Purchase Now</button>
      </div>

    </div>
  </div>
</section>
  )
}