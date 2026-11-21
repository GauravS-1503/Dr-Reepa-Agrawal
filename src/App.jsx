import React, { useEffect, useRef, useState } from "react";
import PageMarkup from "./PageMarkup.jsx";

function localDateString() {
  const now = new Date();
  return new Date(now.getTime() - now.getTimezoneOffset() * 60000)
    .toISOString()
    .slice(0, 10);
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showAllBlogs, setShowAllBlogs] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [formSuccess, setFormSuccess] = useState({
    contact: false,
    booking: false,
  });
  const lastFocused = useRef(null);
  const todayStr = localDateString();

  function closeBooking() {
    setBookingOpen(false);
    requestAnimationFrame(() => lastFocused.current?.focus());
  }

  function onBookingClick(event) {
    const trigger = event.target.closest(".open-booking");
    if (!trigger) return;
    lastFocused.current = trigger;
    if (trigger.dataset.service) setSelectedService(trigger.dataset.service);
    setBookingOpen(true);
  }

  useEffect(() => {
    document.body.classList.toggle("modal-open", bookingOpen);
    if (bookingOpen)
      requestAnimationFrame(() => document.getElementById("bParent")?.focus());
    return () => document.body.classList.remove("modal-open");
  }, [bookingOpen]);

  useEffect(() => {
    if (!bookingOpen) return;
    function onKeyDown(event) {
      if (event.key === "Escape") {
        closeBooking();
        return;
      }
      if (event.key !== "Tab") return;
      const modal = document.getElementById("bookingBackdrop");
      const focusable = [
        ...modal.querySelectorAll(
          "button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),a[href]",
        ),
      ].filter((element) => element.offsetParent !== null);
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [bookingOpen]);

  useEffect(() => {
    const header = document.getElementById("topHeader");
    const onScroll = () =>
      header?.classList.toggle("scrolled", window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const anchors = [...document.querySelectorAll("#navLinks a")];
    const sections = anchors
      .map((anchor) => document.querySelector(anchor.getAttribute("href")))
      .filter(Boolean);
    let sectionObserver;
    if ("IntersectionObserver" in window) {
      sectionObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              anchors.forEach((anchor) =>
                anchor.classList.toggle(
                  "active",
                  anchor.getAttribute("href") === `#${entry.target.id}`,
                ),
              );
            }
          });
        },
        { rootMargin: "-25% 0px -65% 0px" },
      );
      sections.forEach((section) => sectionObserver.observe(section));
    }
    return () => {
      window.removeEventListener("scroll", onScroll);
      sectionObserver?.disconnect();
    };
  }, []);

  useEffect(() => {
    const nodes = document.querySelectorAll(".reveal:not(.visible)");
    if (!("IntersectionObserver" in window)) {
      nodes.forEach((node) => node.classList.add("visible"));
      return;
    }
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 },
    );
    nodes.forEach((node) => revealObserver.observe(node));
    return () => revealObserver.disconnect();
  }, [showAllBlogs]);

  function handleSubmit(event, kind) {
    event.preventDefault();
    const form = event.currentTarget;
    setFormSuccess((current) => ({ ...current, [kind]: false }));
    let firstInvalid = null;
    form.querySelectorAll(".form-error").forEach((error) => {
      error.textContent = "";
    });
    form.querySelectorAll("input, select, textarea").forEach((input) => {
      let message = "";
      const value = input.value.trim();
      if (input.required && !value) message = "This field is required.";
      else if (
        value &&
        input.type === "tel" &&
        value.replace(/\D/g, "").length < 10
      )
        message = "Please enter a valid phone number.";
      else if (
        value &&
        input.type === "email" &&
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
      )
        message = "Please enter a valid email address.";
      else if (value && input.type === "date" && value < todayStr)
        message = "Please choose today or a future date.";

      if (message) {
        input.setAttribute("aria-invalid", "true");
        const error = input.parentElement.querySelector(".form-error");
        if (error) error.textContent = message;
        firstInvalid ??= input;
      } else {
        input.removeAttribute("aria-invalid");
      }
    });
    if (firstInvalid) {
      firstInvalid.focus();
      return;
    }
    setFormSuccess((current) => ({ ...current, [kind]: true }));
    requestAnimationFrame(() =>
      form
        .querySelector(".form-message")
        ?.scrollIntoView({ behavior: "smooth", block: "nearest" }),
    );
  }

  return (
    <PageMarkup
      menuOpen={menuOpen}
      setMenuOpen={setMenuOpen}
      showAllBlogs={showAllBlogs}
      setShowAllBlogs={setShowAllBlogs}
      bookingOpen={bookingOpen}
      closeBooking={closeBooking}
      handleSubmit={handleSubmit}
      formSuccess={formSuccess}
      todayStr={todayStr}
      onBookingClick={onBookingClick}
      selectedService={selectedService}
      setSelectedService={setSelectedService}
    />
  );
}
