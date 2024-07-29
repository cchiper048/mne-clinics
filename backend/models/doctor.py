from sqlalchemy import Column, Integer, String, ForeignKey, Boolean
from sqlalchemy.orm import relationship
from backend.db import Base

class Doctor(Base):
    __tablename__ = "doctors"

    id = Column(Integer, primary_key=True)

    name = Column(String)
    surname = Column(String)
    email = Column(String)
    is_active = Column(Boolean)
    about = Column(String)
