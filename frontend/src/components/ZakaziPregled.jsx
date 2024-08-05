import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getDoctors } from "../services/api";
import "../styles/zakaziPregled.css";

export const ZakaziPregled = () => {
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [appointmentDate, setAppointmentDate] = useState(new Date());
  const [appointmentTime, setAppointmentTime] = useState("");

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const doctorsData = await getDoctors();
        setDoctors(doctorsData || []);
        console.log(doctorsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDoctors();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const appointmentDetails = {
      doctor: selectedDoctor,
      date: appointmentDate.toDateString(),
      time: appointmentTime,
    };
    console.log("Appointment Details:", appointmentDetails);

    // Send the appointment details to the server
    fetch("", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(appointmentDetails),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <section className="zakazi-container">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="doctor">Izaberi Doktora:</label>
          <select
            id="doctor"
            value={selectedDoctor}
            onChange={(e) => setSelectedDoctor(e.target.value)}
            required
          >
            <option value="">--Izaberite doktora--</option>
            {doctors.map((doctor) => (
              <option key={doctor.id} value={doctor.id}>
                {`${doctor.firstName}  ${doctor.lastName}`}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="date">Izaberi Datum:</label>
          <DatePicker
            selected={appointmentDate}
            onChange={(date) => setAppointmentDate(date)}
            dateFormat="yyyy/MM/dd"
            required
          />
        </div>

        <div>
          <label htmlFor="time">Izaberi Vrijeme:</label>
          <input
            type="time"
            id="time"
            value={appointmentTime}
            onChange={(e) => setAppointmentTime(e.target.value)}
            required
          />
        </div>

        <button type="submit">Zakazi</button>
      </form>
    </section>
  );
};
