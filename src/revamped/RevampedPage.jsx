import React, { useEffect, useState } from "react";
import { services, faqs } from "../content.js";

const offerings = [
  {
    icon: "✳",
    label: "The everyday stuff",
    title: "Pediatric consultations",
    description:
      "A place to talk through symptoms, concerns, and all the questions that come with growing up.",
    tone: "peach",
  },
  {
    icon: "♡",
    label: "A little extra support",
    title: "Newborn care",
    description:
      "Gentle guidance for the early days, from feeding questions to your baby's first check-ups.",
    tone: "yellow",
  },
  {
    icon: "✽",
    label: "Growing and thriving",
    title: "Growth & development",
    description:
      "Make space for conversations about milestones, nutrition, and your child's development.",
    tone: "mint",
  },
  {
    icon: "✚",
    label: "Care for the road ahead",
    title: "Vaccination guidance",
    description:
      "Discuss age-appropriate vaccines and preventive care with your pediatrician.",
    tone: "lavender",
  },
];

const navigation = [
  ["About", "#about"],
  ["Care", "#care"],
  ["Your visit", "#visit"],
  ["FAQs", "#faq"],
  ["Contact", "#contact"],
];

function PlayingChildren() {
  return (
    <svg
      className="r-playing-children"
      viewBox="0 0 250 116"
      aria-hidden="true"
      focusable="false"
    >
      <ellipse className="r-play-shadow" cx="125" cy="105" rx="84" ry="5" />
      <g className="r-play-bounce" fill="currentColor">
        <g className="r-play-child r-play-child-left">
          <circle cx="79" cy="25" r="12" />
          <path d="M68 21c1-8 6-12 13-11 5 0 9 3 11 8-8-3-14-2-20 4z" />
          <path d="M69 39q11-5 21 1l3 30H66z" />
          <path d="M68 43 52 56l-6-5-3 4 8 8q2 2 5 0l16-11M89 43l19 12 16-8 2 5-18 10-22-10z" />
          <path
            className="r-play-leg r-play-leg-left"
            d="m68 68 10 1-2 23-7 9-5-3 5-9z"
          />
          <path
            className="r-play-leg r-play-leg-right"
            d="m80 68 10-1 5 21 7 8-5 4-10-8z"
          />
        </g>
        <g className="r-play-child r-play-child-right">
          <circle cx="171" cy="25" r="12" />
          <path d="M159 24q0-14 12-14 12 0 12 15l-4 4q2-12-8-12-8 0-12 7z" />
          <path d="M182 15q10 1 8 12-2 5-7 5l-4-5z" />
          <path d="M162 39q10-5 19 0l3 16 7 19h-40l7-19z" />
          <path d="m161 43-19 12-16-8-2 5 18 10 22-10M180 43l16 12 6-6 4 4-9 9q-2 2-5 0l-15-10z" />
          <path
            className="r-play-leg r-play-leg-right"
            d="m158 71 10 1-2 18-8 10-5-3 6-10z"
          />
          <path
            className="r-play-leg r-play-leg-left"
            d="m173 72 9-1 4 17 8 9-5 4-11-9z"
          />
        </g>
        <circle cx="125" cy="50" r="3.3" />
      </g>
      <path
        className="r-play-spark"
        d="M42 17v9m-4.5-4.5h9M205 17v9m-4.5-4.5h9"
        fill="none"
        stroke="#d07456"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="r-header">
      <div className="r-header-inner r-wrap">
        <a href="#top" className="r-brand" aria-label="Dr. Reepa Agrawal, home">
          <img src={`${import.meta.env.BASE_URL}images/pediatric-care-nutrition-logo.png`} alt="" />
          <span>
            <strong>Dr. Reepa Agrawal</strong>
            <small>pediatric care</small>
          </span>
        </a>
        <nav
          className={open ? "r-nav r-nav-open" : "r-nav"}
          aria-label="Main navigation"
        >
          {navigation.map(([title, href]) => (
            <a href={href} key={href} onClick={() => setOpen(false)}>
              {title}
            </a>
          ))}
          <a
            href="#contact"
            className="r-mobile-book"
            onClick={() => setOpen(false)}
          >
            Request a visit
          </a>
        </nav>
        <a href="#contact" className="r-btn r-btn-dark r-header-cta">
          Request a visit <span>↗</span>
        </a>
        <button
          className="r-menu"
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? "×" : "☰"}
        </button>
      </div>
    </header>
  );
}

function AppointmentForm() {
  const [submitted, setSubmitted] = useState(false);
  const [phoneError, setPhoneError] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    const phone = event.currentTarget.elements.phone.value;
    if (phone.replace(/\D/g, "").length < 10) {
      setPhoneError("Please enter at least 10 digits.");
      setSubmitted(false);
      event.currentTarget.elements.phone.focus();
      return;
    }
    setPhoneError("");
    setSubmitted(true);
  }
  const now = new Date();
  const today = new Date(now.getTime() - now.getTimezoneOffset() * 60000)
    .toISOString()
    .slice(0, 10);
  return (
    <form className="r-form" onSubmit={handleSubmit}>
      <div className="r-form-heading">
        <span className="r-form-icon">✳</span>
        <div>
          <h3>Request a visit</h3>
          <p>Tell us a little about what you need.</p>
        </div>
      </div>
      <div className="r-form-grid">
        <label>
          Parent or guardian name <span>*</span>
          <input
            name="name"
            autoComplete="name"
            required
            placeholder="Your name"
          />
        </label>
        <label>
          Phone number <span>*</span>
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            placeholder="Your phone number"
            aria-invalid={!!phoneError}
            aria-describedby={phoneError ? "r-phone-error" : undefined}
          />
          {phoneError && (
            <small id="r-phone-error" className="r-error">
              {phoneError}
            </small>
          )}
        </label>
        <label>
          Service <span>*</span>
          <select name="service" required defaultValue="">
            <option value="" disabled>
              Select a service
            </option>
            {services.map(([name]) => (
              <option key={name}>{name}</option>
            ))}
          </select>
        </label>
        <label>
          Preferred date <span>*</span>
          <input name="date" type="date" min={today} required />
        </label>
        <label className="r-field-wide">
          Anything else? <small>(optional)</small>
          <textarea
            name="message"
            rows="3"
            placeholder="Share a question or appointment preference"
          />
        </label>
      </div>
      <button type="submit" className="r-btn r-btn-dark r-form-submit">
        Check demo request <span>↗</span>
      </button>
      <p className="r-form-note">
        This is a demo form. It does not send or confirm an appointment.
      </p>
      {submitted && (
        <p className="r-success" role="status">
          Your details passed the demo check. No request has been sent.
        </p>
      )}
    </form>
  );
}

export default function RevampedPage() {
  useEffect(() => {
    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    const elements = document.querySelectorAll(
      ".r-photo-composition, .r-intro-copy, .r-care-head, .r-offering, .r-visit-grid > div, .r-quote .r-wrap, .r-faq-grid > div, .r-contact-grid > div, .r-form",
    );
    let observer;

    function setupReveals() {
      observer?.disconnect();
      elements.forEach((element) =>
        element.classList.remove("r-reveal-pending"),
      );
      if (motionPreference.matches || !("IntersectionObserver" in window))
        return;

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            entry.target.classList.toggle("r-reveal-pending", !entry.isIntersecting);
          });
        },
        { threshold: 0 },
      );

      elements.forEach((element) => {
        const bounds = element.getBoundingClientRect();
        if (bounds.top >= window.innerHeight || bounds.bottom <= 0) {
          element.classList.add("r-reveal-pending");
        }
        observer.observe(element);
      });
    }

    setupReveals();
    motionPreference.addEventListener("change", setupReveals);
    return () => {
      observer?.disconnect();
      motionPreference.removeEventListener("change", setupReveals);
      elements.forEach((element) =>
        element.classList.remove("r-reveal-pending"),
      );
    };
  }, []);

  return (
    <div className="revamped" id="top">
      <Header />
      <main>
        <section className="r-hero">
          <div className="r-wrap r-hero-grid">
            <div className="r-hero-copy">
              <div className="r-kicker">
                <span>✳</span> A LITTLE CARE GOES A LONG WAY
              </div>
              <h1>
                For little lives
                <br />
                <em>and big feelings.</em>
              </h1>
              <p>
                Because growing up comes with questions, cuddles, and the
                occasional worry. Let’s navigate it together.
              </p>
              <div className="r-hero-actions">
                <a className="r-btn r-btn-dark" href="#contact">
                  Let’s plan a visit <span>↗</span>
                </a>
                <a className="r-text-link" href="#care">
                  Explore our care <span>↘</span>
                </a>
              </div>
              <div className="r-hero-note">
                <span>♡</span>
                <p>
                  Thoughtful care for children.
                  <br />
                  <strong>Reassurance for the whole family.</strong>
                </p>
              </div>
            </div>
            <div className="r-hero-art">
              <div className="r-art-blob"></div>
              <span className="r-spark r-spark-one">✳</span>
              <span className="r-spark r-spark-two">✦</span>
              <div className="r-art-circle">
                <img
                  src={`${import.meta.env.BASE_URL}images/pediatric-doctor-illustration.png`}
                  alt="Illustration of a friendly pediatric doctor"
                />
              </div>
              <div className="r-art-tag">
                <span>♡</span>
                <div>
                  <strong>Here for the little things</strong>
                  <small>and the big milestones</small>
                </div>
              </div>
              <span className="r-art-caption">
                A LITTLE MORE COMFORT, EVERY STEP OF THE WAY
              </span>
            </div>
          </div>
          <div className="r-hero-bottom">
            <div className="r-wrap">
              <span>GROWING TOGETHER</span>
              <span>✳</span>
              <span>ONE LITTLE STEP AT A TIME</span>
              <span>✳</span>
              <span>CARE THAT FEELS PERSONAL</span>
              <span>✳</span>
            </div>
          </div>
        </section>

        <section className="r-intro r-section" id="about">
          <div className="r-wrap r-intro-grid">
            <div className="r-photo-composition">
              <div className="r-photo-frame">
                <img
                  src={`${import.meta.env.BASE_URL}images/presentation.png`}
                  alt="Pediatric healthcare professional at a medical presentation"
                />
              </div>
              <div className="r-photo-stamp">
                <span>✽</span> CARE WITH
                <br />A LITTLE HEART
              </div>
              <div className="r-photo-caption">
                <span>✳</span> MEET THE PERSON BEHIND THE CARE
              </div>
            </div>
            <div className="r-intro-copy">
              <div className="r-kicker">
                <span>✳</span> HELLO & WELCOME
              </div>
              <h2>
                Growing up is a journey.
                <br />
                <em>We’re here for it.</em>
              </h2>
              <p>
                Every child is wonderfully their own person. Every parent
                deserves to feel heard. We believe good care begins with a
                little time, a lot of listening, and a conversation you can feel
                comfortable having.
              </p>
              <div className="r-signature">
                <div className="r-signature-mark">
                  R<span>✳</span>
                </div>
                <div>
                  <strong>Dr. Reepa Agrawal</strong>
                  <small>Pediatric Care</small>
                </div>
              </div>
              <p className="r-placeholder">
                Doctor biography to be added with verified information.
              </p>
              <a className="r-text-link" href="#visit">
                What to expect at your visit <span>↗</span>
              </a>
            </div>
          </div>
        </section>

        <section className="r-care r-section" id="care">
          <div className="r-wrap">
            <div className="r-section-head r-care-head">
              <div>
                <div className="r-kicker">
                  <span>✳</span> CARE, MADE FOR LITTLE ONES
                </div>
                <h2>
                  A little help for
                  <br />
                  <em>every growing stage.</em>
                </h2>
              </div>
              <p>
                From first days to everyday questions, find a starting point for
                the care your family needs.
              </p>
            </div>
            <div className="r-offerings">
              {offerings.map((item) => (
                <article
                  className={`r-offering r-${item.tone}`}
                  key={item.title}
                >
                  <div className="r-offering-top">
                    <span className="r-offering-icon">{item.icon}</span>
                    <span className="r-offering-arrow">↗</span>
                  </div>
                  <small>{item.label}</small>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <a href="#contact" aria-label={`Enquire about ${item.title}`}>
                    Enquire about care <span>↗</span>
                  </a>
                </article>
              ))}
            </div>
            <details className="r-all-services">
              <summary>
                Explore all listed services <span>＋</span>
              </summary>
              <div>
                {services.map(([name]) => (
                  <a href="#contact" key={name}>
                    {name}
                  </a>
                ))}
              </div>
              <p>
                These are sample service listings. Please confirm availability
                with the clinic.
              </p>
            </details>
          </div>
        </section>

        <section className="r-visit r-section" id="visit">
          <div className="r-wrap r-visit-grid">
            <div>
              <div className="r-kicker">
                <span>✳</span> YOUR VISIT, AT YOUR PACE
              </div>
              <h2>
                Come as you are.
                <br />
                <em>Questions and all.</em>
              </h2>
              <p>
                There’s no such thing as a silly question when it comes to your
                child. Bring your concerns, your notes, and whatever helps your
                little one feel at ease.
              </p>
              <a className="r-btn r-btn-dark" href="#contact">
                Plan your visit <span>↗</span>
              </a>
            </div>
            <div className="r-visit-list">
              <article>
                <span>01</span>
                <div>
                  <h3>Tell us what’s on your mind</h3>
                  <p>
                    Share your child’s health concerns and the questions you’d
                    like to discuss.
                  </p>
                </div>
              </article>
              <article>
                <span>02</span>
                <div>
                  <h3>Have a thoughtful conversation</h3>
                  <p>
                    Talk through your child’s needs with space to listen and
                    understand.
                  </p>
                </div>
              </article>
              <article>
                <span>03</span>
                <div>
                  <h3>Leave with your next steps</h3>
                  <p>
                    Discuss the care guidance or follow-up that may be right for
                    your family.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="r-quote">
          <div className="r-wrap">
            <div className="r-quote-star">✳</div>
            <p>
              “The smallest steps
              <br />
              can lead to the <em>biggest</em> things.”
            </p>
            <PlayingChildren />
            <span>HERE’S TO GROWING, TOGETHER.</span>
          </div>
        </section>

        <section className="r-faq r-section" id="faq">
          <div className="r-wrap r-faq-grid">
            <div>
              <div className="r-kicker">
                <span>✳</span> GOOD TO KNOW
              </div>
              <h2>
                Curious minds,
                <br />
                <em>meet clear answers.</em>
              </h2>
              <p>
                A few helpful starting points. Get in touch with the clinic to
                confirm the details.
              </p>
              <a className="r-text-link" href="#contact">
                Have another question? <span>↗</span>
              </a>
            </div>
            <div className="r-faq-list">
              {faqs.map(([question, answer]) => (
                <details key={question}>
                  <summary>
                    {question}
                    <span>＋</span>
                  </summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="r-contact r-section" id="contact">
          <div className="r-wrap r-contact-grid">
            <div className="r-contact-copy">
              <div className="r-kicker">
                <span>✳</span> WE’RE HERE FOR YOU
              </div>
              <h2>
                Let’s take the
                <br />
                <em>next little step.</em>
              </h2>
              <p>
                Have a question or want to plan a visit? Start here. We’re
                looking forward to hearing what’s on your mind.
              </p>
              <div className="r-contact-card">
                <span>☎</span>
                <div>
                  <small>GIVE US A CALL</small>
                  <a href="tel:+911234554321">+91 12345 54321</a>
                </div>
              </div>
              <div className="r-contact-card">
                <span>✉</span>
                <div>
                  <small>DROP US A NOTE</small>
                  <a href="mailto:xyz123@gmail.com">xyz123@gmail.com</a>
                </div>
              </div>
              <p className="r-contact-note">
                Phone, email, address, and hours are placeholders to be
                confirmed before publication.
              </p>
            </div>
            <AppointmentForm />
          </div>
        </section>
      </main>
      <footer className="r-footer">
        <div className="r-wrap">
          <div className="r-footer-top">
            <div>
              <a href="#top" className="r-footer-brand">
                Dr. Reepa Agrawal <span>✳</span>
              </a>
              <p>A little care for every chapter of growing up.</p>
            </div>
            <div className="r-footer-links">
              {navigation.map(([title, href]) => (
                <a href={href} key={href}>
                  {title}
                </a>
              ))}
            </div>
          </div>
          <div className="r-footer-bottom">
            <span>© {new Date().getFullYear()} Dr. Reepa Agrawal</span>
            <span>Made with care for little ones & their people.</span>
            <a href={`${import.meta.env.BASE_URL}${import.meta.env.VITE_PAGES_ORIGINAL_PATH || ""}`}>View the original version</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
