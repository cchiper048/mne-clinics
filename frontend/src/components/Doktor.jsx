import React from "react";

export const Doktor = ({ firstName, lastName, specialization, image }) => {
  return (
    <div className="doctor-card">
      <div className="doctor-card__img">
        <img src={image} alt={firstName} />
      </div>
      <div className="doctor-card__info">
        <p className="spec">{specialization} </p>
        <h3 className="doctor-card__name">
          DR. {firstName} {lastName}
        </h3>
      </div>
    </div>
  );
};
