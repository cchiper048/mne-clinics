from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from backend.db import Base

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True)

    name = Column(String)
    surname = Column(String)
    country = Column(String)
    city = Column(String)
    address = Column(String)
    email = Column(String, unique=True)
    password = Column(String)
