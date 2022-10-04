import React, { useRef } from "react";

export default function Form() {
  const nameRef = useRef();
  const emailRef = useRef();
  const subjectRef = useRef();
  const messageRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <input required ref={nameRef} type={"text"} placeholder="Name" />
      <input required ref={emailRef} type={"text"} placeholder="Email" />
      <input required ref={subjectRef} type={"text"} placeholder="Subject" />
      <textarea ref={messageRef} required placeholder="Message" rows="4" />
      <button className="button">Submit </button>
    </form>
  );
}
