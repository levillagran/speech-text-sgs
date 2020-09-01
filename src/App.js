import React from "react";
import "./App.css";
import data from "./task.json";
import Seccion from "./componentes/seccion.js";
import Articulo from "./componentes/articulos.js";
import Observacion from "./componentes/observaciones.js";

export default function App() {
  return (
    <div>
      hola: SGS
      {data.map((e) => (
        <div>
          <Seccion seccion={e.seccion} />
          {e.art.map((e1) => (
            <div>
              <h2>{e1.titulo}</h2>
              {e1.item.map((e2) => (
                <div>
                  <Articulo pregunta={e2.pregunta} />
                  <Articulo respuesta="cumple / no cumple" />
                  <Observacion observacionPrecargada={e2.respuesta} />
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
