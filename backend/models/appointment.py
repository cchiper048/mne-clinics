from sqlalchemy import Column, Integer, String, ForeignKey, DateTime
from sqlalchemy.orm import relationship
from backend.db import Base

class Appointment(Base):
    __tablename__ = "appointments"

    id = Column(Integer, primary_key=True)
    doctor_id =  Column(Integer, ForeignKey("doctors.id"))
    service_id = Column(Integer, ForeignKey("services.id"))
    client_id = Column(Integer, ForeignKey("users.id"))
    status_id = Column(Integer, ForeignKey("appointment_statuses.id"))

    doctor = relationship("Doctor", back_populates="appointments")
    service = relationship("Service", back_populates="appointments")
    client = relationship("User", back_populates="appointments")
    status = relationship("AppointmentStatus", back_populates="appointments")

    datetime_from = Column(DateTime)
    datetime_to = Column(DateTime)
    price = Column(Integer)
