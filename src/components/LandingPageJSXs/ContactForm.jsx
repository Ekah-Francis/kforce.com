/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "../../CSS/LandingPageCSS/ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    jobType: "",
    additionalInfo: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    window.Email.send({
      SecureToken: "YOUR_SMTPJS_SECURE_TOKEN", // Replace with your SMTPJS token
      To: "your-email@example.com", // Replace with your email
      From: formData.email,
      Subject: `Contact Form Submission from ${formData.name}`,
      Body: `
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Job Type:</strong> ${formData.jobType}</p>
        <p><strong>Additional Information:</strong> ${formData.additionalInfo}</p>
      `,
    }).then((message) => {
      alert(
        message === "OK"
          ? "Message sent successfully!"
          : "Failed to send message."
      );
      setLoading(false);
    });
  };

  return (
    <div className="contact-form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">
            Name: <span className="required">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">
            Email: <span className="required">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>
            Job Type: <span className="required">*</span>
          </label>
          <div>
            <input
              type="radio"
              id="temporary"
              name="jobType"
              value="Temporary/Contract/Project"
              checked={formData.jobType === "Temporary/Contract/Project"}
              onChange={handleChange}
              required
            />
            <label htmlFor="temporary">Temporary/Contract/Project</label>
          </div>
          <div>
            <input
              type="radio"
              id="directHire"
              name="jobType"
              value="Direct Hire"
              checked={formData.jobType === "Direct Hire"}
              onChange={handleChange}
              required
            />
            <label htmlFor="directHire">Direct Hire</label>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="additionalInfo">Additional Information:</label>
          <textarea
            id="additionalInfo"
            name="additionalInfo"
            rows="4"
            value={formData.additionalInfo}
            onChange={handleChange}
          ></textarea>
        </div>

        <button type="submit" className="btn-submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
