import React from "react";
import doctorPicture from "../images/Doktori/MilenaMilenic.jpg";

export const Doktor = () => {
    return (
        <div className="doctor-card">
            <div className="doctor-card__img">
                <img src={doctorPicture} alt="Milena Milenic" />
            </div>
            <div className="doctor-card__info">
                <p className="spec">spec. pedijatar </p>
                <h3 className="doctor-card__name">DR. Milena Milenic</h3>
            </div>
        </div>
    );
};
