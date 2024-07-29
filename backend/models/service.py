from sqlalchemy import Column, Integer, String, ForeignKey, Boolean
from sqlalchemy.orm import relationship
from backend.db import Base

class Service(Base):
    __tablename__ = "services"

    id = Column(Integer, primary_key=True)

    name = Column(String)
    price = Column(Integer)
    duration = Column(Integer)
