import React from "react";
import "./Contact.css";
import { useForm, ValidationError } from "@formspree/react";

function Contact() {
  const [state, handleSubmit] = useForm("xgerkwed");

  if (state.succeeded) {
    return (
      <div className="contact">
        <img
          height="100"
          width="100"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Emoji_u263a.svg/1200px-Emoji_u263a.svg.png"
          alt="smiling-emoji"
        />
        <br />
        <p>Thanks for your message! I will be contacting you if necessary</p>
      </div>
    );
  }
  return (
    <div className="contact">
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email : </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          placeholder="@example.com"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <br />
        <textarea
          required
          id="message"
          name="message"
          placeholder="Enter your message here"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <br />
        <button type="submit" disabled={state.submitting}>
          Send Message
        </button>
      </form>
      <br />
      <div className="contact_text">
        <p>
          Let us know of any issues or suggestions!
        </p>
      </div>
    </div>
  );
}

export default Contact;