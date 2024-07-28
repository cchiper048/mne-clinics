from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from backend.db import SessionLocal, engine
from backend.models import doctor_medical_speciality as doctor_medical_speciality_models

doctor_medical_speciality_models.Base.metadata.create_all(bind=engine)

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get("/doctor-medical-speciality/")
def read_user():
    return {
        "message": "Hello There :D"
    }