import { contact } from "../../portfolio";
import "./Contact.css";
import Form from "./Form";

const Contact = () => {
  if (!contact.email) return null;

  return (
    <section className="section contact center" id="contact">
      <h2 className="section__title">Contact</h2>
      <div className="contact__box">
        <Form />
      </div>
      <div className="mail__box">
        <p>
          Alternatively use the link below to use your preferred email provider.
        </p>
        <a href={`mailto:${contact.email}`} target="_blank" rel="noreferrer">
          <span type="button" className="btn btn--outline mail">
            Email me
          </span>
        </a>
      </div>
    </section>
  );
};

export default Contact;
