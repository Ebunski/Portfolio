import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Form() {
  const [status, setStatus] = useState(null);
  const [isSending, setIsSending] = useState(false);
  const formRef = useRef();

  const error = {
    color: "red",
    fontWeight: "500",
  };
  const success = {
    color: "green",
    fontWeight: "500",
  };
  const serviceId = "service_49diwgo";
  const templateId = "template_ofgqrif";
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setIsSending(true);

      const response = await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        process.env.REACT_APP_EMAILJS_KEY
      );
      setStatus(response.status);
    } catch (err) {
      setStatus(err.status);
      console.log(err);
    } finally {
      setTimeout(() => {
        setStatus(null);
        setIsSending(false);
        formRef.current.reset();
      }, 3000);
    }
  }
  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <input name="user_name" required type={"text"} placeholder="Name" />
      <input name="user_email" required type={"text"} placeholder="Email" />
      <input name="user_subject" required type={"text"} placeholder="Subject" />
      <textarea name="message" required placeholder="Message" rows="4" />
      <button disabled={isSending} className="button">
        {" "}
        {isSending ? "sending..." : "Submit"}
      </button>
      {status === 200 && <span style={success}> Message sent! </span>}
      {status === 0 && <span style={error}> Error! </span>}
    </form>
  );
}
