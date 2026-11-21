import React from "react";
import { services } from "./content.js";
import { ServiceCards, BlogCards, FaqItems } from "./Sections.jsx";

export default function PageMarkup({
  menuOpen,
  setMenuOpen,
  showAllBlogs,
  setShowAllBlogs,
  bookingOpen,
  closeBooking,
  handleSubmit,
  formSuccess,
  todayStr,
  onBookingClick,
  selectedService,
  setSelectedService,
}) {
  return (
    <div onClickCapture={onBookingClick}>
      <header className="site-header" id="topHeader">
        <div className="nav-wrap container">
          <a className="brand" href="#home" aria-label="Dr. Reepa Agrawal home">
            <img
              className="brand-logo header-logo"
              src="/images/pediatric-care-nutrition-logo.png"
              alt=""
              width="96"
              height="64"
            />
            <span className="brand-wordmark">
              <span className="brand-name">
                Reepa <span className="brand-accent">Agrawal</span>
              </span>
              <span className="brand-sub">Pediatric Care</span>
            </span>
          </a>
          <nav
            className={`nav-links ${menuOpen ? "mobile-open" : ""}`}
            id="navLinks"
            onClick={() => setMenuOpen(false)}
            aria-label="Main navigation"
          >
            <a href="#home">Home</a>
            <a href="#about">About Us</a>
            <a href="#services">Services</a>
            <a href="#what-you-get">What You Get</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#parenting-blog">Parenting Blog</a>
            <a href="#parent-stories">Parent Stories</a>
            <a href="#faqs">FAQs</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="nav-actions">
            <a className="btn btn-secondary call-nav" href="tel:+911234554321">
              ☎ Call Now
            </a>
            <button
              className="btn btn-primary book-nav open-booking"
              type="button"
            >
              Book Appointment
            </button>
            <button
              className="menu-toggle"
              id="menuToggle"
              aria-label={
                menuOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? "×" : "☰"}
            </button>
          </div>
        </div>
      </header>
      <main>
        <section className="hero" id="home">
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">Gentle Care for Growing Kids</span>
              <h1>
                Big Care for Your <span>Little Ones.</span>
              </h1>
              <p className="lead">
                Every little milestone deserves loving care. Discover a
                welcoming space designed around your child's health, comfort and
                happy growth.
              </p>
              <div className="hero-actions">
                <button className="btn btn-primary open-booking" type="button">
                  ♡ Book an Appointment <span>→</span>
                </button>
                <a className="btn btn-secondary" href="tel:+911234554321">
                  ☎ Call +91 12345 54321
                </a>
              </div>
              <div className="support-line">
                ✦ Care that puts little ones and their families first.
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-orb"></div>
              <span className="spark s1">✦</span>
              <span className="spark s2">♡</span>
              <div className="hero-art">
                <img
                  src="/images/team.png"
                  alt="Pediatric healthcare team at an educational event"
                />
              </div>
              <div className="float-card float-one">
                <span className="icon pink">🌱</span>
                <span>
                  Little Steps<small>Big milestones</small>
                </span>
              </div>
              <div className="float-card float-two">
                <span className="icon blue">♡</span>
                <span>
                  Care for Every<small>Growing stage</small>
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="section" id="about">
          <div className="container about-grid">
            <div className="about-photo reveal">
              <img
                src="/images/presentation.png"
                alt="Pediatric healthcare professional at a medical presentation"
              />
              <div className="photo-note">
                ♡ Little Smiles, Healthier Tomorrows
              </div>
            </div>
            <div className="reveal">
              <span className="eyebrow">A little about us</span>
              <h2>Where Little Smiles Come First</h2>
              <p>
                Welcome to a warm and thoughtful space for children's
                healthcare. Every family deserves clear information, a kind
                conversation and care that respects each child's unique needs.
              </p>
              <p>
                <strong>About Dr. Reepa Agrawal</strong>
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur a neque sed lectus blandit feugiat. This placeholder
                biography should be replaced with verified information approved
                by the doctor.
              </p>
              <div className="check-list">
                <div className="check-item">
                  <span>✓</span> A caring approach
                </div>
                <div className="check-item">
                  <span>✓</span> Child-friendly experience
                </div>
                <div className="check-item">
                  <span>✓</span> Parent-focused guidance
                </div>
                <div className="check-item">
                  <span>✓</span> Support as children grow
                </div>
              </div>
              <button
                className="btn btn-primary"
                type="button"
                onClick={() =>
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Know More About the Doctor →
              </button>
            </div>
          </div>
        </section>
        <section className="section services-section" id="services">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">Pediatric services</span>
              <h2>Thoughtful Care for Every Little Need</h2>
              <p>
                Explore pediatric services designed to support children through
                different stages of growing up.
              </p>
            </div>
            <div className="service-grid" id="serviceGrid">
              <ServiceCards />
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">A caring experience</span>
              <h2>Care That Feels a Little More Like Home</h2>
              <p>
                Small things can make healthcare conversations feel more
                welcoming for children and families.
              </p>
            </div>
            <div className="feature-grid">
              <article
                className="feature-card reveal"
                style={{ "--tint": "var(--pink)" }}
              >
                <span className="icon pink">🏡</span>
                <h3>A Welcoming Environment</h3>
                <p>
                  A friendly, considerate setting where families can feel
                  comfortable asking questions.
                </p>
              </article>
              <article
                className="feature-card reveal"
                style={{ "--tint": "var(--blue)" }}
              >
                <span className="icon blue">💬</span>
                <h3>Thoughtful Consultations</h3>
                <p>
                  Time to share concerns and discuss your child's health needs
                  in clear language.
                </p>
              </article>
              <article
                className="feature-card reveal"
                style={{ "--tint": "var(--mint)" }}
              >
                <span className="icon mint">🤝</span>
                <h3>Guidance for Parents</h3>
                <p>
                  Helpful conversations to support informed decisions about
                  everyday child care.
                </p>
              </article>
              <article
                className="feature-card reveal"
                style={{ "--tint": "var(--lav)" }}
              >
                <span className="icon lav">🌈</span>
                <h3>Support Through Growing Years</h3>
                <p>
                  Care conversations that can adapt as your little one reaches
                  new milestones.
                </p>
              </article>
            </div>
          </div>
        </section>
        <section
          className="section"
          id="what-you-get"
          style={{ background: "linear-gradient(180deg,#fff,#f2fbff)" }}
        >
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">Your visit</span>
              <h2>More Than a Visit — A Caring Experience</h2>
              <p>
                Helpful conversations and clear next steps for the whole family.
              </p>
            </div>
            <div className="benefit-grid">
              <article className="card benefit-card reveal">
                <span className="icon pink">♡</span>
                <div>
                  <h3>A Welcoming Consultation</h3>
                  <p>A friendly start to discussing your child's needs.</p>
                </div>
              </article>
              <article className="card benefit-card reveal">
                <span className="icon blue">🩺</span>
                <div>
                  <h3>Child Health Discussions</h3>
                  <p>Talk through symptoms, concerns and relevant history.</p>
                </div>
              </article>
              <article className="card benefit-card reveal">
                <span className="icon mint">📏</span>
                <div>
                  <h3>Growth Conversations</h3>
                  <p>
                    Discuss growth and development questions with the doctor.
                  </p>
                </div>
              </article>
              <article className="card benefit-card reveal">
                <span className="icon lav">🛡️</span>
                <div>
                  <h3>Preventive Care Guidance</h3>
                  <p>
                    Ask about age-appropriate preventive care and vaccination.
                  </p>
                </div>
              </article>
              <article className="card benefit-card reveal">
                <span className="icon peach">💬</span>
                <div>
                  <h3>Parent Questions & Answers</h3>
                  <p>Make space for questions that matter to your family.</p>
                </div>
              </article>
              <article className="card benefit-card reveal">
                <span className="icon pink">📝</span>
                <div>
                  <h3>Follow-Up Information</h3>
                  <p>Understand any recommended next steps after the visit.</p>
                </div>
              </article>
            </div>
            <div style={{ textAlign: "center", marginTop: "32px" }}>
              <button className="btn btn-primary open-booking" type="button">
                Book Your Visit →
              </button>
            </div>
          </div>
        </section>
        <section className="section" id="how-it-works">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">Simple steps</span>
              <h2>Getting Started Is Easy</h2>
              <p>
                A simple way to request a visit and prepare for your
                conversation.
              </p>
            </div>
            <div className="steps">
              <article
                className="step reveal"
                style={{ "--tint": "var(--pink)" }}
              >
                <div className="step-number">01</div>
                <h3>Choose Your Service</h3>
                <p>
                  Explore the available pediatric services and select the option
                  that best matches your needs.
                </p>
              </article>
              <article
                className="step reveal"
                style={{ "--tint": "var(--blue)" }}
              >
                <div className="step-number">02</div>
                <h3>Request an Appointment</h3>
                <p>
                  Share your contact details and preferred appointment date.
                </p>
              </article>
              <article
                className="step reveal"
                style={{ "--tint": "var(--mint)" }}
              >
                <div className="step-number">03</div>
                <h3>Confirm Your Visit</h3>
                <p>
                  The clinic can contact you to confirm the appointment details.
                </p>
              </article>
              <article
                className="step reveal"
                style={{ "--tint": "var(--lav)" }}
              >
                <div className="step-number">04</div>
                <h3>Visit and Discuss</h3>
                <p>
                  Meet the doctor and discuss your child's healthcare needs.
                </p>
              </article>
            </div>
            <div style={{ textAlign: "center", marginTop: "28px" }}>
              <button className="btn btn-primary open-booking" type="button">
                Request an Appointment →
              </button>
            </div>
          </div>
        </section>
        <section
          className="section"
          id="parenting-blog"
          style={{ background: "#fff" }}
        >
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">For curious parents</span>
              <h2>Little Questions, Helpful Reads</h2>
              <p>
                Explore friendly sample articles about parenting, child wellness
                and everyday family life.
              </p>
            </div>
            <div className="blog-grid" id="blogGrid">
              <BlogCards showAll={showAllBlogs} />
            </div>
            <div style={{ textAlign: "center", marginTop: "25px" }}>
              <button
                className="btn btn-secondary"
                id="moreBlogs"
                type="button"
                onClick={() => setShowAllBlogs(!showAllBlogs)}
              >
                {showAllBlogs ? "Show Fewer Articles ↑" : "View All Articles ↓"}
              </button>
            </div>
            <p className="placeholder-note">
              Note: Blog articles shown here are sample placeholders and must be
              medically reviewed before publication. They are for general
              information, not a substitute for professional medical advice.
            </p>
          </div>
        </section>
        <section className="section" id="parent-stories">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">Family moments</span>
              <h2>Little Moments, Big Smiles</h2>
              <p>
                Example story cards for layout preview only — not genuine
                patient reviews.
              </p>
            </div>
            <div className="stories">
              <article
                className="card story-card reveal"
                style={{ "--tint": "var(--pink)" }}
              >
                <div className="quote">“</div>
                <blockquote>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Replace this sample with a verified, permissioned family
                  story.”
                </blockquote>
                <div className="parent-name">Parent Name Placeholder</div>
                <div className="parent-age">Child age: [Add if approved]</div>
                <span
                  style={{
                    position: "absolute",
                    right: "20px",
                    top: "20px",
                    color: "#df8fac",
                  }}
                >
                  ♡ ♡
                </span>
              </article>
              <article
                className="card story-card reveal"
                style={{ "--tint": "var(--blue)" }}
              >
                <div className="quote">“</div>
                <blockquote>
                  “A placeholder story about a welcoming visit and a helpful
                  conversation. Replace with authentic content only after
                  consent.”
                </blockquote>
                <div className="parent-name">Parent Name Placeholder</div>
                <div className="parent-age">Child age: [Add if approved]</div>
                <span
                  style={{
                    position: "absolute",
                    right: "20px",
                    top: "20px",
                    color: "#df8fac",
                  }}
                >
                  ♡ ♡
                </span>
              </article>
              <article
                className="card story-card reveal"
                style={{ "--tint": "var(--mint)" }}
              >
                <div className="quote">“</div>
                <blockquote>
                  “Sample text goes here. Do not publish this as a real
                  testimonial or patient review.”
                </blockquote>
                <div className="parent-name">Parent Name Placeholder</div>
                <div className="parent-age">Child age: [Add if approved]</div>
                <span
                  style={{
                    position: "absolute",
                    right: "20px",
                    top: "20px",
                    color: "#df8fac",
                  }}
                >
                  ♡ ♡
                </span>
              </article>
            </div>
            <div style={{ textAlign: "center", marginTop: "30px" }}>
              <a className="btn btn-secondary" href="#contact">
                Have Questions? Get in Touch →
              </a>
            </div>
          </div>
        </section>
        <section
          className="section"
          id="faqs"
          style={{ background: "linear-gradient(180deg,#fff,#fbf8ff)" }}
        >
          <div className="container faq-layout">
            <div className="faq-intro reveal">
              <span className="eyebrow">FAQs</span>
              <h2>Questions Parents Often Ask</h2>
              <p>
                Here are a few general answers to help you get started. Please
                contact the clinic to confirm details.
              </p>
              <a className="btn btn-primary" href="#contact">
                Still Have Questions? →
              </a>
            </div>
            <div className="faq-list reveal" id="faqList">
              <FaqItems />
            </div>
          </div>
        </section>
        <section className="cta-band">
          <div className="container cta-inner reveal">
            <div>
              <span className="eyebrow">One little next step</span>
              <h2>Ready to Take the Next Little Step?</h2>
              <p>
                Have a question or want to request an appointment? We're here to
                help.
              </p>
            </div>
            <div className="cta-actions">
              <button className="btn btn-primary open-booking" type="button">
                ♡ Book an Appointment
              </button>
              <a className="btn btn-secondary" href="tel:+911234554321">
                ☎ Call Now
              </a>
            </div>
          </div>
        </section>
        <section className="section" id="contact">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">Contact us</span>
              <h2>We're Here to Help</h2>
              <p>
                Send a demo appointment request or use the contact details below
                to reach the clinic.
              </p>
            </div>
            <div className="contact-grid">
              <div className="contact-cards reveal">
                <a className="contact-card" href="tel:+911234554321">
                  <span className="icon mint">☎</span>
                  <span>
                    <strong>Phone</strong>
                    <p>+91 12345 54321</p>
                  </span>
                </a>
                <a className="contact-card" href="mailto:xyz123@gmail.com">
                  <span className="icon pink">✉</span>
                  <span>
                    <strong>Email</strong>
                    <p>xyz123@gmail.com</p>
                  </span>
                </a>
                <div className="contact-card">
                  <span className="icon blue">⌖</span>
                  <span>
                    <strong>Clinic Address</strong>
                    <p>[Add Clinic Address]</p>
                  </span>
                </div>
                <div className="contact-card">
                  <span className="icon lav">◷</span>
                  <span>
                    <strong>Opening Hours</strong>
                    <p>[Add Clinic Hours]</p>
                  </span>
                </div>
                <p className="placeholder-note">
                  Phone, email, address and hours are placeholders where
                  applicable. Confirm all clinic details before publishing.
                </p>
              </div>
              <form
                className="card form-card reveal"
                id="contactForm"
                noValidate
                onSubmit={(event) => handleSubmit(event, "contact")}
              >
                <h3>Request an Appointment</h3>
                <p>
                  Fill in the details below. This standalone demo does not send
                  data to a clinic.
                </p>
                <div className="form-grid">
                  <div className="field">
                    <label htmlFor="parentName">Parent/Guardian Name *</label>
                    <input
                      id="parentName"
                      name="parentName"
                      required
                      autoComplete="name"
                      placeholder="Your full name"
                    />
                    <div className="form-error"></div>
                  </div>
                  <div className="field">
                    <label htmlFor="childName">Child's Name (optional)</label>
                    <input
                      id="childName"
                      name="childName"
                      placeholder="Child's name"
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      placeholder="Your phone number"
                    />
                    <div className="form-error"></div>
                  </div>
                  <div className="field">
                    <label htmlFor="email">Email Address (optional)</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                    />
                    <div className="form-error"></div>
                  </div>
                  <div className="field">
                    <label htmlFor="service">Preferred Service *</label>
                    <select id="service" name="service" required>
                      <option value="">Choose a service</option>
                      {services.map(([name]) => (
                        <option key={name} value={name}>
                          {name}
                        </option>
                      ))}
                    </select>
                    <div className="form-error"></div>
                  </div>
                  <div className="field">
                    <label htmlFor="date">Preferred Date *</label>
                    <input
                      id="date"
                      name="date"
                      type="date"
                      required
                      min={todayStr}
                    />
                    <div className="form-error"></div>
                  </div>
                  <div className="field full">
                    <label htmlFor="message">Message (optional)</label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Anything you'd like the clinic to know?"
                    ></textarea>
                  </div>
                </div>
                <button
                  className="btn btn-primary"
                  type="submit"
                  style={{ marginTop: "18px" }}
                >
                  {formSuccess.contact
                    ? "Demo Request Checked ✓"
                    : "Submit Demo Request →"}
                </button>
                <div
                  className={`form-message ${formSuccess.contact ? "show" : ""}`}
                  role="status"
                  aria-live="polite"
                >
                  Thank you! This demo form validated successfully, but no
                  request has been sent. Please contact the clinic directly to
                  confirm your visit.
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <a
                className="brand"
                href="#home"
                aria-label="Dr. Reepa Agrawal home"
              >
                <img
                  className="brand-logo"
                  src="/images/reepa-agrawal-monogram.svg"
                  alt=""
                  width="52"
                  height="52"
                />
                <span className="brand-wordmark">
                  <span className="brand-name">
                    Reepa <span className="brand-accent">Agrawal</span>
                  </span>
                  <span className="brand-sub">Pediatric Care</span>
                </span>
              </a>
              <p style={{ marginTop: "18px", maxWidth: "290px" }}>
                Little Smiles, Healthier Tomorrows. A welcoming space for
                children's health and family questions.
              </p>
            </div>
            <div className="footer-col">
              <h3>Explore</h3>
              <div className="footer-links">
                <a href="#about">About Us</a>
                <a href="#services">Services</a>
                <a href="#what-you-get">What You Get</a>
                <a href="#how-it-works">How It Works</a>
                <a href="#parenting-blog">Parenting Blog</a>
              </div>
            </div>
            <div className="footer-col">
              <h3>Popular Services</h3>
              <div className="footer-links">
                <a href="#services">Pediatric Consultation</a>
                <a href="#services">Newborn Care</a>
                <a href="#services">Child Vaccination</a>
                <a href="#services">Growth Assessment</a>
                <a href="#services">Child Nutrition</a>
              </div>
            </div>
            <div className="footer-col">
              <h3>Get in Touch</h3>
              <div className="footer-links">
                <a href="tel:+911234554321">+91 12345 54321</a>
                <a href="mailto:xyz123@gmail.com">xyz123@gmail.com</a>
                <span>[Add Clinic Address]</span>
                <a href="#contact">Contact form →</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>
              © <span id="year">{new Date().getFullYear()}</span> Dr. Reepa
              Agrawal. All rights reserved.
            </p>
            <p>
              Medical information on this demo is not a substitute for
              professional care.
            </p>
          </div>
        </div>
      </footer>
      <div className="floating-actions">
        <a className="btn btn-secondary" href="tel:+911234554321">
          ☎ Call Now
        </a>
        <button className="btn btn-primary open-booking" type="button">
          ♡ Book Appointment
        </button>
      </div>

      <div
        className={`modal-backdrop ${bookingOpen ? "show" : ""}`}
        id="bookingBackdrop"
        onClick={(event) => {
          if (event.target === event.currentTarget) closeBooking();
        }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modalTitle"
      >
        <div className="modal">
          <div className="modal-top">
            <div>
              <span className="eyebrow">Appointment request</span>
              <h2 id="modalTitle">Let's Plan Your Little One's Visit</h2>
              <p>
                Share a few details and we'll help you with your appointment
                request.
              </p>
            </div>
            <button
              className="close-modal"
              id="closeModal"
              aria-label="Close appointment form"
              type="button"
              onClick={closeBooking}
            >
              ×
            </button>
          </div>
          <div className="demo-note">
            Demo mode: this form does not send data or confirm a real
            appointment.
          </div>
          <form
            id="bookingForm"
            noValidate
            onSubmit={(event) => handleSubmit(event, "booking")}
          >
            <div className="form-grid">
              <div className="field">
                <label htmlFor="bParent">Parent/Guardian Name *</label>
                <input
                  id="bParent"
                  name="parent"
                  required
                  autoComplete="name"
                />
                <div className="form-error"></div>
              </div>
              <div className="field">
                <label htmlFor="bChild">Child's Name (optional)</label>
                <input id="bChild" name="child" />
              </div>
              <div className="field">
                <label htmlFor="bAge">Child's Age (optional)</label>
                <input id="bAge" name="age" placeholder="e.g. 3 years" />
              </div>
              <div className="field">
                <label htmlFor="bPhone">Phone Number *</label>
                <input
                  id="bPhone"
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                />
                <div className="form-error"></div>
              </div>
              <div className="field">
                <label htmlFor="bEmail">Email Address (optional)</label>
                <input id="bEmail" name="email" type="email" />
                <div className="form-error"></div>
              </div>
              <div className="field">
                <label htmlFor="bService">Preferred Service *</label>
                <select
                  id="bService"
                  name="service"
                  required
                  value={selectedService}
                  onChange={(event) => setSelectedService(event.target.value)}
                >
                  <option value="">Choose a service</option>
                  {services.map(([name]) => (
                    <option key={name} value={name}>
                      {name}
                    </option>
                  ))}
                </select>
                <div className="form-error"></div>
              </div>
              <div className="field">
                <label htmlFor="bDate">Preferred Appointment Date</label>
                <input id="bDate" name="date" type="date" min={todayStr} />
              </div>
              <div className="field">
                <label htmlFor="bTime">Preferred Time (optional)</label>
                <select id="bTime" name="time">
                  <option value="">Any time / not sure</option>
                  <option>Morning</option>
                  <option>Afternoon</option>
                  <option>Evening</option>
                </select>
              </div>
              <div className="field full">
                <label htmlFor="bMessage">Additional Message (optional)</label>
                <textarea
                  id="bMessage"
                  name="message"
                  placeholder="Share any appointment preferences"
                ></textarea>
              </div>
            </div>
            <button
              className="btn btn-primary"
              type="submit"
              style={{ marginTop: "18px" }}
            >
              {formSuccess.booking
                ? "Demo Request Checked ✓"
                : "Send Demo Request →"}
            </button>
            <div
              className={`form-message ${formSuccess.booking ? "show" : ""}`}
              id="bookingSuccess"
              role="status"
              aria-live="polite"
            >
              Thank you! Your appointment request has been received in demo
              mode. Please contact the clinic directly to confirm your visit.
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
