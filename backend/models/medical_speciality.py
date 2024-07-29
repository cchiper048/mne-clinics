from sqlalchemy import Column, Integer, String, ForeignKey, DateTime
from sqlalchemy.orm import relationship
from backend.db import Base

class MedicalSpeciality(Base):
    __tablename__ = "medical_specialities"

    id = Column(Integer, primary_key=True)

    name = Column(String)
