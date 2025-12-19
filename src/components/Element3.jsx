import React from "react";
import { useState } from "react";
import "./css/Element3.css";

export default function Element3() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "1fa50789-1493-485a-bce2-f08469ce4c64");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
  };

  return (
    <div className="element3">
      <h3>
        I'm open to internships, collaborations, and freelance work. <br></br>
        Feel free to contact me
      </h3>

      <section className="contact">
        <form onSubmit={onSubmit}>
          <div className="input-box">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              className="field"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="input-box">
            <label>E-mail Address</label>
            <input
              type="email"
              name="email"
              className="field"
              placeholder="Enter your e-mail"
              required
            />
          </div>
          <div className="input-box">
            <label>Message</label>
            <textarea
              name="message"
              id=""
              className="field mess"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </section>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <p>
        <a href="https://www.flaticon.com/free-icons/">Icons by Flaticon</a>
      </p>
      <br></br>
      <br></br>
    </div>
  );
}
