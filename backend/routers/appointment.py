from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from backend.db import SessionLocal, engine
from backend.models import appointment as appointment_models
from backend.crud import appointment as appointment_crud

appointment_models.Base.metadata.create_all(bind=engine)

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get("/appointments/{doctor_id}/{date}")
def read_user(doctor_id: int, date: str, db: Session = Depends(get_db)):
    return appointment_crud.get_appointments(db, doctor_id, date)

@router.post("/appointments/")
def add_appointment(doctor_id: int, date: str, time: str, db: Session = Depends(get_db)):
    return appointment_crud.post_appointment(db, doctor_id, date, time)