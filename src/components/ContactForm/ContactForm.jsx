/// LIBRARIES
import { useForm, ValidationError } from "@formspree/react";

/// CSS
import "./ContactForm.css";

/// IMAGES

/// FUNCTION
export default function ContactForm() {
  const [state, handleSubmit] = useForm("mykgjyvz");
  if (state.succeeded) {
    return (
      <section className="ContactFormSection">
        <div className="contact">
          <p className="ContactForm__success">
            Thanks — I’ll get back to you soon.
          </p>
        </div>
      </section>
    );
  }
  return (
    <section className="ContactFormSection">
      <div className="contact">
        <form className="ContactForm" onSubmit={handleSubmit}>
          <h3 className="ContactForm__title">Send me a message</h3>

          <div className="input-box">
            <label htmlFor="email">Email</label>
            <input
              className="field"
              id="email"
              type="email"
              name="email"
              autoComplete="email"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="input-box">
            <label htmlFor="subject">Title</label>
            <input
              className="field"
              id="subject"
              type="text"
              name="subject"
              autoComplete="off"
              required
            />
            <ValidationError
              prefix="Title"
              field="subject"
              errors={state.errors}
            />
          </div>

          <div className="input-box">
            <label htmlFor="message">Message</label>
            <textarea
              className="field mess"
              id="message"
              name="message"
              required
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button type="submit" disabled={state.submitting}>
            {state.submitting ? "Sending…" : "Send"}
          </button>
        </form>
      </div>
    </section>
  );
}
