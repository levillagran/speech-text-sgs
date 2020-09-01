import React from "react";
import OpcionesLlenado from "./botones.js";

export default function Observacion(props) {
  return (
    <div>
      <textarea rows="4" cols="50">
        {props.observacionPrecargada}
      </textarea>
      <OpcionesLlenado />
    </div>
  );
}
