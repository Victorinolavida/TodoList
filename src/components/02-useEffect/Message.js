import React, { useEffect, useState } from "react";

export default function Message() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const { x, y } = coords;
  const mousemove = (e) => {
    // console.log(e);
    const corrs = { x: e.x, y: e.y };
    // console.log(corrs);
    setCoords(corrs);
  };

  useEffect(() => {
    // console.log("Componente montado");
    window.addEventListener("mousemove", mousemove);

    return () => {
      // console.log("Componente desmontado");
      window.removeEventListener("mousemove", mousemove);
    };
  }, []);
  return (
    <div>
      <h3>Eres genial !!!!!!!!</h3>
      <p>
        x:{x},y:{y}
      </p>
    </div>
  );
}
