import React, { useEffect, useState } from "react";
import { getUsluge } from "../services/api";
import { UslugaKartica } from "./UslugaKartica";

export const Usluge = () => {
  const [usluge, setUsluge] = useState([]);

  useEffect(() => {
    const fetchUsluge = async () => {
      try {
        const uslugeData = await getUsluge();
        setUsluge(uslugeData);
      } catch (error) {
        console.error("Error fetching data ", error);
      }
    };
    fetchUsluge();
  }, []);

  return (
    <article className="usluge-holder">
      {usluge.map((usluga) => (
        <UslugaKartica key={usluga.id} name={usluga.name} image={usluga.icon} />
      ))}
    </article>
  );
};
