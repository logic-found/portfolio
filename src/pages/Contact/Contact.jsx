import React, { useRef } from "react";
import "./Contact.scss";
import Container from "../../components/Container/Container";
import Wrapper from "../../components/Wrapper/Wrapper";
import { Title, SubTitle } from "../../components/TitleandSubTitle/TitleandSubTitle";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";


const Contact = () => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_fyb672m",
        "template_xlyhfol",
        formRef.current,
        "Krq7iYltX6jgEuAQk"
      )
      .then(
        (result) => {
          toast.success("Message send successfully.");
          console.log(result.text);
        },
        (error) => {
          toast.error("Message not send.");

          console.log(error.text);
        }
      );
  };
  return (
    <div id="contact">

    <Container>
      <Wrapper>
        <Title title="Contact" />
        <form ref={formRef} onSubmit={handleSubmit} className="contactForm">
          <div className="contactTitle">Email Me 🚀</div>
          <input
            type="text"
            placeholder="Your Name"
            name="user_name"
            className="contactInput"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            name="user_email"
            className="contactInput"
            required
          />
          <input
            type="text"
            placeholder="Subject"
            name="subject"
            className="contactInput"
            required
          />
          <textarea
            placeholder="Message"
            name="message"
            className="contactInput"
            rows={3}
            required
          />
          <button className="contactSubmitBtn">Send</button>
        </form>
        

      </Wrapper>
    </Container>
    </div>
  );
};

export default Contact;
