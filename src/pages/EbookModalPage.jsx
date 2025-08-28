import React from "react";
import { Button } from "react-bootstrap";
import ButtonsGroup from "../components/ButtonsGroup";

export const EbookModalPage = () => {
  const buttonsConfig4 = [
    { label: "Quiero el Ebook", url: "https://pay.hotmart.com/K101334294V" },
  ];

  return (
    <>
      {/* Modal */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        // aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Contenido del Ebook
              </h1>
              <h3 className="fw-normal text-black">
                U$D 7,99 (Precio Especial de Lanzamiento)
              </h3>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            {/* Vertically centered scrollable modal */}
            <div class="modal-dialog  modal-dialog-scrollable">
              <div class="modal-body text-start">
                <ul>
                  <li>
                    <span className="fw-bold">
                      Módulo 1: Crear contenido de valor.
                    </span>{" "}
                    Aprenderás a identificar los intereses reales de tu
                    audiencia, detectar sus dolores y convertir esa información
                    en contenido que eduque, entretenga y posicione tu marca
                    como autoridad. Técnicas como el storytelling, contenido
                    evergreen y respuestas estratégicas a comentarios serán
                    clave.
                  </li>
                  <li>
                    <span className="fw-bold">
                      Módulo 2: Mentalidad del negocio.
                    </span>
                    Trabajaremos creencias limitantes, enfoque en el largo
                    plazo, hábitos de ejecución diaria, y la diferencia entre
                    pensar como empleado vs. pensar como emprendedor.Tu éxito
                    digital empieza en tu mente.
                  </li>
                  <li>
                    <span className="fw-bold">
                      Módulo 3: Crear una marca personal.{" "}
                    </span>
                    Definirás tus valores, estilo y diferenciador único.
                    Aprenderás a construir una presencia coherente en redes
                    sociales, crear tu avatar de cliente ideal y establecer una
                    identidad visual memorable.
                  </li>
                  <li>
                    <span className="fw-bold">
                      Módulo 4: Promocionar un producto digital.{" "}
                    </span>
                    Explorarás estrategias orgánicas y de pago, funnels de
                    ventas, prueba social, escasez y bonos irresistibles.
                    Aprenderás cómo presentar tu producto como la solución
                    concreta a un problema real.
                  </li>
                  <li>
                  <span className="fw-bold">
                    Módulo 5: Vender sin mostrar tu rostro.
                  </span>
                    Conocerás
                    herramientas de creación de contenido como presentaciones
                    animadas, avatares, voz en off y plantillas visuales para
                    comunicar con autoridad sin necesidad de mostrar tu imagen.
                  </li>
                  <li>
                    <span className="fw-bold">
                      Módulo 6: Tráfico orgánico sin publicidad.
                    </span>{" "}
                    Verás cómo aprovechar algoritmos de Instagram, Pinterest,
                    TikTok y YouTube. Técnicas de SEO para redes sociales,
                    publicación estratégica y herramientas para detectar qué
                    contenido virilizar.
                  </li>
                  <li>
                    <span className="fw-bold">
                      Módulo 7: Automatizar el proceso de ventas.
                    </span>{" "}
                    Aprenderás a crear una máquina de ventas 24/7 con
                    herramientas como email marketing, landing pages, secuencias
                    automatizadas, CRM gratuitos y embudos optimizados para
                    Convertir.
                  </li>
                  <li>
                    <span className="fw-bold">
                      Módulo 8: Lanzar tu propio producto digital.
                    </span>{" "}
                    Pasarás del diseño al lanzamiento. Estrategias de preventa,
                    generación de expectativa, captación de leads, y métodos
                    para lanzar una y otra vez sin necesidad de reinventar todo
                    desde cero.
                  </li>
                </ul>
              </div>
            </div>
            <div class="modal-footer">
              <Button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </Button>
              <div>
                <ButtonsGroup buttons={buttonsConfig4} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
