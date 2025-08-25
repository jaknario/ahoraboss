import ButtonForm from "./ButtonForm";
import { ContactForm } from "./ContactForm";

export const Footer = () => {
  return (
    <>
      &nbsp; &nbsp;
      <ContactForm />
      <div className="container container-fluid d-flex justify-content-around align-items-center">
        <div className="container">
          <footer className="f-text" >
            <p>© 2025 AhoraBoss. All rights reserved.</p>
          </footer>
        </div>
        <div className="card-icon  d-flex justify-content-around align-items-center">
          <div>
          <a href="https://www.instagram.com" target="_blak">
            <i className="bi bi-instagram p-2" style={{ fontSize: 25 }}></i>
          </a>
          </div>
          <div>
          <a href="https://www.facebook.com" target="_blank">
            <i className="bi bi-facebook p-2" style={{ fontSize: 25 }}></i>
          </a>
          </div>
          <div>
            <ButtonForm />
          </div>
        </div>
      </div>
    </>
  );
};
