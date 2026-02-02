import "../styles/ourStory.css";
import storyMain from "../images/story-main.jpeg";
import story1 from "../images/story-1.jpeg";

export default function OurStorySection() {
  return (
    <section className="our-story">
      <div className="our-story-container">
        {/* Left Images */}
        <div className="story-images">
          <img src={storyMain} alt="Factory work" className="main-img" />
          <div className="small-images">
            <img src={story1} alt="Industry" />
          </div>
        </div>

        {/* Right Content */}
        <div className="story-content">
          <span className="section-tag">OUR STORY</span>

          <h2>
            Transforming industries <br />
            <span>with innovative efficient solutions</span>
          </h2>

          <p>
            We specialize in revolutionizing industries by delivering innovative,
            efficient solutions that enhance productivity and streamline processes.
            Through advanced technologies, precision engineering, and sustainable
            practices.
          </p>

          {/* Stats */}
          <div className="story-stats">
            <div>
              <h3>10k+</h3>
              <span>Completed Project</span>
            </div>
            <div>
              <h3>15+</h3>
              <span>Satisfied Customer</span>
            </div>
            <div>
              <h3>10k+</h3>
              <span>Year Of Mastery</span>
            </div>
          </div>

          {/* Watch intro */}
          <div className="watch-intro">
            <button>▶</button>
            <span>WATCH INTRO</span>
          </div>
        </div>
      </div>
    </section>
  );
}
