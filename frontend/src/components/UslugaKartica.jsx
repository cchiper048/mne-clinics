import React from "react";

export const UslugaKartica = ({ name, image }) => {
  return (
    <section className="nasa-usluga">
      <img src={image} className="usluga-icon" />
      <h3>{name}</h3>
    </section>
  );
};
