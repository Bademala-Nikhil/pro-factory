import "../styles/blog.css";
import Blog1 from "../images/blog-1.jpeg";
import Blog2 from "../images/blog-2.jpeg";

export default function Blog() {
  return (
<section className="latest-blog">
  <div className="latest-blog-inner">

    {/* HEADING */}
    <div className="latest-blog-heading">
      <span className="section-tag">LATEST BLOG</span>
      <h2>
        Insights from our <br />
        <span>latest blogs</span>
      </h2>
      <p>
        Stay updated with the latest trends, innovations, and expert insights
        in the manufacturing and industrial sectors.
      </p>
    </div>

    {/* BLOG CARDS */}
    <div className="latest-blog-cards">

      {/* CARD 1 */}
      <div className="blog-card">
        <img src={Blog1} alt="Blog 1" />
        <p>
          Sustainable Practices Reducing Waste in <br />
          Industrial Production
        </p>
        <span className="arrow">↗</span>
      </div>

      {/* CARD 2 */}
      <div className="blog-card">
        <img src={Blog2} alt="Blog 2" />
        <p>
          Advanced Robotics Revolutionizing <br />
          Industrial Workflows
        </p>
        <span className="arrow">↗</span>
      </div>

    </div>

  </div>
</section>
)
}