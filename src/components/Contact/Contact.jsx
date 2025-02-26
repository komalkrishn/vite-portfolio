import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";

const Contact = () => {
  const [messageSent, setMessageSent] = useState(false);

  useEffect(() => {
    if (messageSent) {
      const timer = setTimeout(() => {
        setMessageSent(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [messageSent]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          setMessageSent(true);
          form.reset();
        } else {
          alert("Oops! Something went wrong.");
        }
      })
      .catch(() => alert("Something went wrong. Please try again later."));
  };

  return (
    <Container fluid className="contact-section">
      <Particle />
      <div className="contact-header">
        <h1 className="heading-1">Get In Touch.</h1>
        <h3 style={{ color: "#cc4bff" }} className="heading-1">
          Drop your message below and hit 'Send Message'—I'll receive it
          directly in my Gmail inbox🥰!
        </h3>
      </div>
      <br />
      <div className="row">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/mjkgqqlj"
            method="POST"
            target="_blank"
            id="con-form"
            onSubmit={handleSubmit}
          >
            <div className="row">
              <div className="w-50">
                <div className="input-group outer-shadow hover-in-shadow">
                  <input
                    type="text"
                    name="Name"
                    placeholder="Your Name"
                    className="input-control"
                    required
                  />
                </div>
                <div className="input-group outer-shadow hover-in-shadow">
                  <input
                    type="email"
                    name="Email"
                    placeholder="Email id"
                    className="input-control"
                    required
                  />
                </div>
                <div className="input-group outer-shadow hover-in-shadow">
                  <input
                    type="text"
                    name="Subject"
                    placeholder="Subject"
                    className="input-control"
                    required
                  />
                </div>
              </div>
              <div className="w-50">
                <div className="input-group outer-shadow hover-in-shadow">
                  <textarea
                    className="input-control txt"
                    name="Message"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="submit-btn">
                <button
                  type="submit"
                  className="btn-1 outer-shadow hover-in-shadow"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>

          {messageSent && (
            <p className="success-message">
              ✅ Your message has been sent successfully!
            </p>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Contact;
