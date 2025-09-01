import ButtonForm from "./ButtonForm";
import { ContactForm } from "./ContactForm";

export const Footer = () => {
  return (
    <>
      &nbsp; &nbsp;
      <ContactForm />
      <div className="container container-fluid d-flex justify-content-around align-items-center">
        <div>
          <footer className="f-text text-start">
            <p>© 2025 | AhoraBoss | Todos los derechos reservados.</p>
            <br/>
            <p>Principio de éxito: Actitud Mental Positiva</p>
          </footer>
        </div>
        <div className="card-icon  d-flex justify-content-around align-items-center">
          <div className="img-icon">
            <a href="https://www.instagram.com" target="_blak">
              <i className="bi bi-instagram p-2" style={{ fontSize: 25, color:"white"}}></i>
            </a>
          </div>
          <div className="img-icon">
            <a href="https://www.facebook.com" target="_blank">
              <i className="bi bi-facebook p-2" style={{ fontSize: 25, color:"white"}}></i>
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
