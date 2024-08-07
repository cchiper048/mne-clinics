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
  const [availableTimes, setAvailableTimes] = useState([]);

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

  useEffect(() => {
    const fetchAvailableTimes = async () => {
      if (selectedDoctor && appointmentDate) {
        const formattedDate = appointmentDate.toISOString().split("T")[0];
        try {
          const response = await fetch(
            `/appointment?doctor=${selectedDoctor}&date=${formattedDate}`
          );
          const data = await response.json();
          setAvailableTimes(data);
        } catch (error) {
          console.error("Error fetching available times:", error);
        }
      }
    };

    fetchAvailableTimes();
  }, [selectedDoctor, appointmentDate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const appointmentDetails = {
      doctor: selectedDoctor,
      date: appointmentDate.toDateString(),
      time: appointmentTime,
    };
    console.log("Appointment Details:", appointmentDetails);

    // Send the appointment details to the server
    fetch("/appointment", {
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

  const isWeekday = (date) => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  };

  const minDate = new Date();
  const maxDate = new Date();
  maxDate.setDate(minDate.getDate() + 7);

  return (
    <section className="zakazi-container">
      <form onSubmit={handleSubmit} className="zakazivanje-form">
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
                {`${doctor.firstName} ${doctor.lastName}`}
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
            filterDate={isWeekday}
            minDate={minDate}
            maxDate={maxDate}
            required
          />
        </div>

        <div>
          <label htmlFor="time">Izaberi Vrijeme:</label>
          <select
            id="time"
            value={appointmentTime}
            onChange={(e) => setAppointmentTime(e.target.value)}
            required
          >
            <option value="">--Izaberite vreme--</option>
            {availableTimes.map((time, index) => (
              <option key={index} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>

        <button type="submit">Zakazi</button>
      </form>
    </section>
  );
};
