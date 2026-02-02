import bgHero from "../images/bg-hero.jpeg";
import "../styles/hero.css";

export default function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${bgHero})` }}
    >
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1>
          Excellence innovating <br />
          <span>industry for today</span>
        </h1>

        <p className="hero-text">
          At the heart of our operations is a commitment to delivering superior
          products through cutting-edge technology and innovative processes.
        </p>

        <button className="hero-btn">
          Explore More <span>→</span>
        </button>

        <div className="hero-features">
          <span>⚙ Advanced Manufacturing Solutions</span>
          <span>✔ Quality Assurance Systems</span>
          <span>🚀 State-of-the-Art Technology</span>
        </div>
      </div>
    </section>
  );
}
