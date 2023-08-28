import React, { useState } from "react";
import axios from "axios"; // Import axios for HTTP requests
import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faTriangleExclamation,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import Container from "../components/Container/Container";

const Contact = () => {
  const [messageSuccess, setMessageSuccess] = useState(false);
  const [orderDenied, setOrderDenied] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const customerDataHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const messageUser = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

    try {
      await axios.post("http://localhost:8000/api/contact", messageUser);
      console.log("Message sent successfully!", messageUser);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      setMessageSuccess(true);
      setTimeout(() => {
        setMessageSuccess(false);
      }, 3000);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <>
      {messageSuccess ? (
        <div
          style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "fixed",
            top: "0",
            right: "0",
            left: "0",
            background: "rgba(255, 255, 255, 0.3)",
            backdropFilter: "blur(5px)",
            overflow: "hidden",
          }}
        >
          <div className="order-success">
            <FontAwesomeIcon icon={faCircleCheck} />
            Your Message has been sent successfully!
            <FontAwesomeIcon
              icon={faXmark}
              onClick={() => setMessageSuccess(false)}
              style={{
                width: "1.67rem",
                height: "1.67rem",
                position: "absolute",
                margin: "0",
                top: "1rem",
                right: "1rem",
                cursor: "pointer",
              }}
            />
          </div>
        </div>
      ) : null}{" "}
      {!orderDenied ? (
        <Container>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              position: "fixed",
              top: "10rem",
              left: "0",
              right: "0",
            }}
          >
            <div className="denied">
              <FontAwesomeIcon
                icon={faTriangleExclamation}
                style={{ marginRight: "1.67rem", width: "2.5rem" }}
              />
              Something went wrong. Please try again.
              <FontAwesomeIcon
                icon={faXmark}
                onClick={() => setOrderDenied(true)}
                style={{ marginLeft: "1.67rem", cursor: "pointer" }}
              />
            </div>
          </div>
        </Container>
      ) : null}{" "}
      <div style={styles.contactContainer}>
        <div style={styles.contactDetails}>
          <h2 style={styles.h2}>Reach Out To Us</h2>
          <h5 style={styles.h5}>By Address:</h5>
          <p style={styles.p}>123 Street, City, Country</p>
          <h5 style={styles.h5}>By Email:</h5>
          <p style={styles.p}> example@example.com</p>
          <h5 style={styles.h5}>By Phone:</h5>
          <p style={styles.p}> +123 456 7890</p>
        </div>
        <div className="form-inputs" style={styles.contactForm}>
          <h2 style={styles.h2}>Send Your Request</h2>
          <form>
            <input
              type="text"
              value={formData.name}
              name="name"
              placeholder="Name"
              style={styles.input}
              onChange={customerDataHandler}
            />
            <input
              type="email"
              value={formData.email}
              name="email"
              placeholder="Email Address"
              style={styles.input}
              onChange={customerDataHandler}
            />
            <input
              type="tel"
              value={formData.phone}
              name="phone"
              placeholder="Phone"
              style={styles.input}
              onChange={customerDataHandler}
            />
            <textarea
              value={formData.message}
              name="message"
              placeholder="Message"
              rows="4"
              style={styles.textarea}
              onChange={customerDataHandler}
            ></textarea>
            <button
              type="submit"
              style={styles.sendButton}
              onClick={handleSubmit}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

const styles = {
  contactContainer: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0 4%",
    borderBottom: "1px solid #ccc",
  },
  contactDetails: {
    flex: 1,
    padding: "0 80px 0 0",
    alignContent: "center",
    alignItems: "center",
  },
  h2: {
    padding: "0 0 42px",
    fontFamily: "Jost",
    fontWeight: "500 !important",
    textTransform: "none",
    fontSize: "30px",
    lineHeight: "3rem !important",
    color: "#000a12",
  },
  h5: {
    fontFamily: "Jost",
    fontWeight: "500 ",
    textTransform: "none",
    fontSize: "18px",
    lineHeight: "2rem ",
    color: "#000a12",
    padding: "0 0 15px",
  },
  p: {
    margin: "0",
    padding: "0 0 30px",
    fontSize: "12px",
  },

  contactForm: {
    flex: 1,
    padding: "0 15px 0 80px",
    borderLeft: "1px solid #ccc",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    marginBottom: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  sendButton: {
    marginBottom: "10px",
    width: "100%",
    padding: "11px 33px",
    backgroundColor: "#030303",
    color: "#fff",
    border: "none",
    fontSize: "16px",
    lineHeight: "30px",
    fontWeight: "500",
    cursor: "pointer",
  },
};

export default Contact;
