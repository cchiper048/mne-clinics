from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from backend.db import Base

class AppointmentStatus(Base):
    __tablename__ = "appointment_statuses"

    id = Column(Integer, primary_key=True)
    name = Column(String)