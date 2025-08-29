import React from 'react'
import ButtonsGroup from './ButtonsGroup';
import { imagen2, imagen3, imagen4 } from '../assets/image/index.js'

export const CardProduct = () => {
  // Array de configuración de los botones
  const buttonsConfig = [
    { label: "COMPRAR", url: "https://go.hotmart.com/K101388983R?dp=1" },
  ];
  const buttonsConfig1 = [
    { label: "COMPRAR", url: "https://go.hotmart.com/Y39831157B?ap=5bd8" },
  ];
  const buttonsConfig2 = [
    { label: "COMPRAR", url: "https://go.hotmart.com/T101308102J?dp=1" },
  ];

  return (
    <>
      <div className="card-suggest">
        <h3 className="card-sub-title text-white p-4">Productos Sugeridos</h3>
        &nbsp; &nbsp; &nbsp; &nbsp;
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card h-100">
            <img src={imagen2} alt="product" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title fw-bold">Dispara Tus Ventas con IA</h5>
              <h4>Precio: U$D 445</h4>
              <p className="card-text">
                Aprenderás cómo utilizar herramientas de Inteligencia Artificial
                para aumentar tus ventas, ahorrando tiempo y dinero. Te
                enseñamos con ejemplos prácticos y ejercicios dinámicos para que
                puedas poner en práctica todo este conocimiento en tus
                proyectos. Además te llevarás diversos tutoriales y plantillas
                que harán que tus ventas se incrementen masivamente.
              </p>
            </div>
            <div className="btn-primary">
              <ButtonsGroup buttons={buttonsConfig} />
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src={imagen3} alt="product" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title fw-bold">Tik- Tok Marketing</h5>
              <h4>Precio: U$D 69.99</h4>
              <p className="card-text">
                Tik Tok Marketing es el primer programa de habla hispana que te
                explica paso a paso y desde cero, cómo puedes tener 20 mil
                nuevos seguidores sin gastar un centavo en menos de 40 días y
                poder hacer dinero con tu nueva comunidad. Con más de 1 billón
                de descargas en todo el mundo, Tik tok se perfila como una de
                las grandes potencias en cuanto a nivel de aceptación y
                popularidad de esta era.
              </p>
            </div>
            <div className="btn-primary">
              <ButtonsGroup buttons={buttonsConfig1} />
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src={imagen4} alt="product" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title fw-bold">Marketing Digital</h5>
              <h4>Precio: U$D 552.99</h4>
              <p className="card-text">
                Por la compra de este curso obtendrás no solo asesoria
                personalizada si no que también 5 sesiones de coaching de
                regalo!!! Para que desbloquees los miedos que puedan estar
                obstaculizando tu camino Este curso viene en ESPAÑOL, INGLES,
                FRANCES, PORTUGUES Y ALEMAN! Tambien tiene derechos de reventa
              </p>
            </div>
            <div className="btn-primary">
              <ButtonsGroup buttons={buttonsConfig2} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
