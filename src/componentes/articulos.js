import React from "react";

export default function Pregunta(props) {
  return (
    <div>
      <h3>{props.pregunta}</h3>
    </div>
  );
}

export function Respuesta(props) {
  return (
    <div>
      <output type="text">{props.respuesta}</output>
    </div>
  );
}
