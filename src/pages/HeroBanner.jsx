import React from "react";
import mockup_abss_ebook from "../assets/image/mockup_abss_ebook.png";
import { Button } from "react-bootstrap";
import ButtonsGroup from "../components/ButtonsGroup";
export const HeroBanner = () => {
    const buttonsConfig4 = [
    { label: "Quiero el Ebook", url: "https://pay.hotmart.com/K101334294V" },
  ];
  return (
    <div className="container-fluid">
      <div className="row align-items-center">
        <div className="container-title col-4 mb-4 mb-md-0 p-2">
          <div className="container-fluid">
            <h1 className="title fw-bold text-justify text-white">
              EBOOK DE CERO A VENDEDOR ÉLITE
            </h1>
            <h3 className="fw-normal text-white">
              Crea, Vende y Escala Tu Infoproducto
            </h3>
          </div>
          <br />
          <p className="text-hook d-none d-md-block fs-5 fs-sm-6 text-wrap">
            Descubre el sistema exacto que usan los creadores más exitosos para
            generar ingresos 24/7, sin mostrar su rostro, sin invertir en
            publicidad y con todo automatizado… y empieza hoy mismo.
          </p>
          <div className="mt-3 p-2">
            <ButtonsGroup buttons={buttonsConfig4} />
          </div>
        </div>
        <div className="col-8 text-center p-4">
          <img
            src={mockup_abss_ebook}
            alt="mockup_abss_ebook"
            className="img-fluid"
            width="650px"
            height="500px"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            style={{ cursor: "pointer" }}
          />
        </div>
        &nbsp; &nbsp; &nbsp; &nbsp;
        <div className="mt-4 p-2">
          <h2 className="fw-bold text-white">Temas Tratados en el Ebook</h2>
          <hr className="text-white" />
          <p className="text-hook fs-5 fs-sm-6 text-wrap">
            Olvídate de la incertidumbre. Conviértete en el dueño de tu tiempo y
            tus ingresos. Este sistema te guía paso a paso para lanzar y vender
            tu propio producto digital como un pro… incluso si empiezas desde
            cero. La oportunidad está aquí, la decisión es tuya.
          </p>
          <br />
          <br />
          <br />
          <div className="d-flex justify-content-between align-items-center">
            <div className="text-white p-2">
              <div className="d-flex justify-content-center align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  class="bi bi-book"
                  viewBox="0 0 16 16"
                >
                  <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
                </svg>
              </div>
              <div className="text-icon">
                <p>
                  Aprenderás los fundamentos esenciales para crear y lanzar un
                  infoproducto rentable desde cero.
                </p>
              </div>
            </div>
            <div className="text-white p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                class="bi bi-laptop"
                viewBox="0 0 16 16"
              >
                <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5" />
              </svg>
              <div className="text-icon">
                <p>
                  Descubre las mejores estrategias de promoción digital para
                  vender sin necesidad de mostrar tu rostro.
                </p>
              </div>
            </div>
            <div className="text-white p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                class="bi bi-rocket-takeoff"
                viewBox="0 0 16 16"
              >
                <path d="M9.752 6.193c.599.6 1.73.437 2.528-.362s.96-1.932.362-2.531c-.599-.6-1.73-.438-2.528.361-.798.8-.96 1.933-.362 2.532" />
                <path d="M15.811 3.312c-.363 1.534-1.334 3.626-3.64 6.218l-.24 2.408a2.56 2.56 0 0 1-.732 1.526L8.817 15.85a.51.51 0 0 1-.867-.434l.27-1.899c.04-.28-.013-.593-.131-.956a9 9 0 0 0-.249-.657l-.082-.202c-.815-.197-1.578-.662-2.191-1.277-.614-.615-1.079-1.379-1.275-2.195l-.203-.083a10 10 0 0 0-.655-.248c-.363-.119-.675-.172-.955-.132l-1.896.27A.51.51 0 0 1 .15 7.17l2.382-2.386c.41-.41.947-.67 1.524-.734h.006l2.4-.238C9.005 1.55 11.087.582 12.623.208c.89-.217 1.59-.232 2.08-.188.244.023.435.06.57.093q.1.026.16.045c.184.06.279.13.351.295l.029.073a3.5 3.5 0 0 1 .157.721c.055.485.051 1.178-.159 2.065m-4.828 7.475.04-.04-.107 1.081a1.54 1.54 0 0 1-.44.913l-1.298 1.3.054-.38c.072-.506-.034-.993-.172-1.418a9 9 0 0 0-.164-.45c.738-.065 1.462-.38 2.087-1.006M5.205 5c-.625.626-.94 1.351-1.004 2.09a9 9 0 0 0-.45-.164c-.424-.138-.91-.244-1.416-.172l-.38.054 1.3-1.3c.245-.246.566-.401.91-.44l1.08-.107zm9.406-3.961c-.38-.034-.967-.027-1.746.163-1.558.38-3.917 1.496-6.937 4.521-.62.62-.799 1.34-.687 2.051.107.676.483 1.362 1.048 1.928.564.565 1.25.941 1.924 1.049.71.112 1.429-.067 2.048-.688 3.079-3.083 4.192-5.444 4.556-6.987.183-.771.18-1.345.138-1.713a3 3 0 0 0-.045-.283 3 3 0 0 0-.3-.041Z" />
                <path d="M7.009 12.139a7.6 7.6 0 0 1-1.804-1.352A7.6 7.6 0 0 1 3.794 8.86c-1.102.992-1.965 5.054-1.839 5.18.125.126 3.936-.896 5.054-1.902Z" />
              </svg>
              <div className="text-icon">
                <p>
                  Automatiza tu sistema de ventas y haz que tu negocio crezca
                  incluso mientras duermes.
                </p>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};
