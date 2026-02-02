import "../styles/footer.css";

export default function Footer() {
  return (
      <section className="footer">
  <div className="footer-inner">

    {/* CTA */}
    <div className="footer-cta">
      <h2>Ready to work with us?</h2>
      <p>
        Join us to experience cutting-edge industrial solutions that drive
        innovation, lasting success.
      </p>

      <div className="footer-cta-btn">
        ↗
      </div>
    </div>

    <div className="footer-divider"></div>

    {/* FOOTER CONTENT */}
    <div className="footer-content">

      {/* LOGO + ABOUT */}
      <div className="footer-about">
        <div className="footer-logo">
          <span>⚙</span>
          <strong>FactoryPro</strong>
        </div>
        <p>
          We are committed to providing personalized industrial solutions.
        </p>

        <div className="footer-socials">
          <span>f</span>
          <span>in</span>
          <span>⚙</span>
        </div>
      </div>

      {/* QUICK LINKS */}
      <div className="footer-links">
        <h4>Quick Links</h4>
        <p>Home</p>
        <p>About Us</p>
        <p>Blog</p>
        <p>Services</p>
      </div>

      {/* SECURITY */}
      <div className="footer-links">
        <h4>Security</h4>
        <p>Terms & Condition</p>
        <p>Privacy Policy</p>
        <p>Help</p>
        <p>Contact Us</p>
      </div>

      {/* CONTACT */}
      <div className="footer-links">
        <h4>Contact</h4>
        <p>+91 123456789</p>
        <p>info@domainname.com</p>
        <p>520, West Valley, Amin and mirm</p>
      </div>

    </div>

    <div className="footer-bottom">
      Copyright © 2024 All Rights Reserved.
    </div>

  </div>
</section>


  )
}





