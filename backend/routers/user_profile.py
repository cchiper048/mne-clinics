from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from backend.db import SessionLocal, engine
from backend.models import user_profile as user_profile_models

user_profile_models.Base.metadata.create_all(bind=engine)

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get("/user-profile/")
def read_user():
    return {
        "message": "Hello There :D"
    }