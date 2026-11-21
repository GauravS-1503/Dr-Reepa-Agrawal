import React, { useState } from "react";
import { blogs, faqs, services } from "./content.js";

const tones = ["pink", "blue", "mint", "lav", "peach"];

export function ServiceCards() {
  return services.map(([name, description, emoji], index) => (
    <article className="card service-card reveal" key={name}>
      <span className={`icon ${tones[index % tones.length]}`}>{emoji}</span>
      <h3>{name}</h3>
      <p>{description}</p>
      <button
        className="btn btn-secondary open-booking"
        type="button"
        data-service={name}
      >
        Book Consultation →
      </button>
    </article>
  ));
}

export function BlogCards({ showAll }) {
  const [openArticles, setOpenArticles] = useState([]);
  const visible = showAll ? blogs : blogs.slice(0, 4);

  function toggleArticle(index) {
    setOpenArticles((current) =>
      current.includes(index)
        ? current.filter((item) => item !== index)
        : [...current, index],
    );
  }

  return visible.map((blog, index) => {
    const open = openArticles.includes(index);
    return (
      <article
        className="card blog-card reveal"
        style={{ "--tint": blog.tint }}
        key={blog.title}
      >
        <div className="blog-image" style={{ "--tint": blog.tint }}>
          {blog.emoji}
        </div>
        <div className="blog-content">
          <span className="tag">{blog.category}</span>
          <h3>{blog.title}</h3>
          <p>{blog.excerpt}</p>
          <button
            className="btn read-article"
            type="button"
            aria-expanded={open}
            onClick={() => toggleArticle(index)}
          >
            {open ? "Close Article −" : "Read Article +"}
          </button>
          <div
            className="article-body"
            hidden={!open}
            dangerouslySetInnerHTML={{ __html: blog.body }}
          />
        </div>
      </article>
    );
  });
}

export function FaqItems() {
  const [openItems, setOpenItems] = useState([]);

  function toggle(index) {
    setOpenItems((current) =>
      current.includes(index)
        ? current.filter((item) => item !== index)
        : [...current, index],
    );
  }

  return faqs.map(([question, answer], index) => {
    const open = openItems.includes(index);
    return (
      <div className={`faq-item ${open ? "open" : ""}`} key={question}>
        <button
          className="faq-question"
          type="button"
          aria-expanded={open}
          onClick={() => toggle(index)}
        >
          <span>{question}</span>
          <span>{open ? "−" : "+"}</span>
        </button>
        <div className="faq-answer">{answer}</div>
      </div>
    );
  });
}
