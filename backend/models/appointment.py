from sqlalchemy import Column, Integer, String, ForeignKey, DateTime
from sqlalchemy.orm import relationship
from backend.db import Base

class Appointment(Base):
    __tablename__ = "appointments"

    id = Column(Integer, primary_key=True)

    doctor_id = Column(Integer, ForeignKey("doctors.id"))
    date = Column(String)
    time = Column(String)
