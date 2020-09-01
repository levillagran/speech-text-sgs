import React, { useState } from "react";
import Artyom from "./artyom.js";
import TranscriptEditor from "@bbc/react-transcript-editor";

export default function OpcionesLlenado() {
  const [show, setCount] = useState(false);
  if (show) {
    return (
      <div>
        <button onClick={() => setCount(!show)}>
          - Opciones de completado
        </button>
        <Dictar />
        <div>
          <button>Cargar Audio</button>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <button onClick={() => setCount(!show)}>
          + Opciones de completado
        </button>
      </div>
    );
  }
}

function Dictar() {
  const [show, setCount] = useState(false);
  const artyom = new Artyom();

  artyom.fatality(); // Detener cualquier instancia previa

  var UserDictation = artyom.newDictation({
    continuous: true, // Activar modo continuous if HTTPS connection
    onResult: function (text) {
      // Mostrar texto en consola
      console.log(text);
    },
    onStart: function () {
      alert("Iniciara el dictado");
      console.log("Dictado iniciado");
    },
    onEnd: function () {
      console.log("Dictado detenido por el usuario");
      alert("Dictado detenido por el usuario");
    },
  });

  if (show) {
    return (
      <div>
        <button onClick={() => setCount(!show)}>- Dictar</button>
        <div>
          <button onClick={() => UserDictation.start()}>Iniciar</button>
          <button onClick={() => UserDictation.stop()}>Parar</button>
          <TranscriptEditor />
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <button onClick={() => setCount(!show)}>+ Dictar</button>
      </div>
    );
  }
}
