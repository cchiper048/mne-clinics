from sqlalchemy.orm import Session
from backend.models import doctor as doctor_models
from backend.schemas import doctor as doctor_schemas


def get_doctors(db: Session):
    doctors = db.query(doctor_models).all()

    
