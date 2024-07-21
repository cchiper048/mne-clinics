import React from "react";
import { Doktor } from "../components/Doktor";
import "../styles/doktori.css";

export const Doktori = () => {
    return (
        <>
            <h2 className="doktori-title">Upoznajte nase doktore:</h2>
            <section className="doktori-holder">
                <Doktor />
                <Doktor />
                <Doktor />
                <Doktor />
                <Doktor />
                <Doktor />
                <Doktor />
            </section>
        </>
    );
};
