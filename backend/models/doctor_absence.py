from sqlalchemy import Column, Integer, String, ForeignKey, DateTime
from sqlalchemy.orm import relationship
from backend.db import Base

class DoctorAbsence(Base):
    __tablename__ = "doctor_absences"

    id = Column(Integer, primary_key=True)

    # doctor_id =  Column(Integer, ForeignKey("doctors.id"))
    # doctor = relationship("Doctor", back_populates="doctor_absences")

    date_from = Column(DateTime)
    date_to = Column(DateTime)
