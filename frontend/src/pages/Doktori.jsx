import React, { useState, useEffect } from "react";
import { Doktor } from "../components/Doktor";
import "../styles/doktori.css";
import { getDoctors } from "../services/api";

export const Doktori = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const doctorsData = await getDoctors();
        setDoctors(doctorsData || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDoctors();
  }, []);

  return (
    <main className="doktori-main-section">
      <h2 className="doktori-title">Upoznajte nase doktore:</h2>
      <section className="doktori-holder">
        {doctors.map((doctor) => (
          <Doktor
            key={doctor.id}
            firstName={doctor.firstName}
            lastName={doctor.lastName}
            specialization={doctor.specialization}
            image={doctor.image}
          />
        ))}
      </section>
    </main>
  );
};
