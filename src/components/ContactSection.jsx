import "../styles/contact.css";

const ContactSection = () => {
  return (
    <section className="contact">
      <div className="contact-container">

        {/* LEFT INFO */}
        <div className="contact-info">
          <span className="contact-tag">CONTACT US</span>
          <h2>
            Get in touch <span>with us</span>
          </h2>
          <p>
            Reach out for any inquiries, support, or to discuss how we can
            meet your industrial needs.
          </p>

          <div className="contact-item">
            <div className="icon">📞</div>
            <div>
              <h4>Contact</h4>
              <p>+1 890 120 670</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="icon">✉️</div>
            <div>
              <h4>E-mail</h4>
              <p>info@domainname.com</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="icon">📍</div>
            <div>
              <h4>Our Address</h4>
              <p>57 San Juan Lane, Great Floorsstraat 22A, 3021 CH</p>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="contact-form">
          <h3>
            Contact <span>me</span>
          </h3>

          <form>
            <div className="form-row">
              <input type="text" placeholder="Enter first name" />
              <input type="text" placeholder="Enter last name" />
            </div>

            <input type="email" placeholder="Enter your e-mail" />
            <input type="text" placeholder="Enter your phone no." />
            <textarea placeholder="Write Message"></textarea>

            <button type="submit">Submit Message</button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
