import "../styles/ourHistory.css";

const OurHistory = () => {
  return (
    <section className="our-history">
      <div className="history-container">
        {/* LEFT */}
        <div className="history-left">
          <span className="history-tag">OUR HISTORY</span>
          <h2>
            Foundation of excellences <br />
            <span>in industry</span>
          </h2>

          <div className="history-tabs">
            <div className="active">In 1920 - Planning</div>
            <div>In 1922 - Journey Started</div>
            <div>In 1925 - Journey Progress</div>
            <div>In 1930 - Global Reach</div>
            <div>In 1940 - Industry Leadership</div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="history-right">
          <h3>
            Company <span>started</span>
          </h3>
          <p>
            Welcome to industry, a leading industry innovation with a
            rich history of excellence. With a passion for precision
            and a commitment to quality, we have been empowering
            industries and driving progress.
          </p>

          <ul>
            <li>Quality Control System</li>
            <li>Building Quality Industrial</li>
            <li>Environmental Responsibility</li>
            <li>Building Quality Industrial</li>
          </ul>

        </div>
      </div>
    </section>
  );
};

export default OurHistory;
