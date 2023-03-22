import LoadingButton from "@mui/lab/LoadingButton/LoadingButton";
import { Button } from "@mui/material";
import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const nameInputHandler = (evt) => {
    const nameInput = evt.target.value;
    setName(nameInput);
  };
  const emailInputHandler = (evt) => {
    const emailInput = evt.target.value;
    setEmail(emailInput);
  };
  const commentInputHandler = (evt) => {
    const commentInput = evt.target.value;
    setComment(commentInput);
  };

  const formSubmissionHandler = (event) => {
    setSubmitting(true);
    event.preventDefault();
    // console.log(name);
    // console.log(email);
    // console.log(comment);
    setTimeout(() => setSubmitted(true), 2000);
  };

  const gobackHandler = () => {
    setSubmitted(false);
    setSubmitting(false);
    setName("");
    setEmail("");
    setComment("");
  };

  return (
    <>
      {!submitted ? (
        <div className="form__box">
          <form
            name="contact_form"
            method="post"
            data-netlify="true"
            onSubmit={formSubmissionHandler}
          >
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                onChange={nameInputHandler}
                value={name}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                onChange={emailInputHandler}
                value={email}
              />
            </div>

            <div className="form-group">
              <label htmlFor="comment">Comment:</label>
              <textarea
                id="comment"
                name="comment"
                required
                onChange={commentInputHandler}
                value={comment}
              />
            </div>

            <div className="form-group">
              {!submitting ? (
                <button
                  // variant="contained"
                  // color="success"
                  type="submit"
                  // loading={submitting ? true : false}
                >
                  Submit
                </button>
              ) : (
                <LoadingButton
                  variant="contained"
                  loading={true}
                  color="success"
                >
                  Submit
                </LoadingButton>
              )}
            </div>
          </form>
        </div>
      ) : (
        <div className="confirm__box">
          <h1>Thank you</h1>
          <p>I will get back to you as soon as possible. </p>
          <button className="confirm__box-button" onClick={gobackHandler}>
            Back
          </button>
        </div>
      )}
    </>
  );
};

export default Form;
