import axios from "axios";

const DOCTORS_API_URL = "./src/db/doctors.json";
const USLUGE_API_URL = "./src/db/usluge.json";

export const getDoctors = async () => {
  try {
    const response = await axios.get(DOCTORS_API_URL);
    return response.data.doctors;
  } catch (error) {
    console.error("Error fetching doctors:", error);
    throw error;
  }
};

export const getUsluge = async () => {
  try {
    const response = await axios.get(USLUGE_API_URL);
    return response.data.services;
  } catch (error) {
    console.error("Error fetching services:", error);
    throw error;
  }
};
