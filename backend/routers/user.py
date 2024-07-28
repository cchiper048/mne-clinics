from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from backend.db import SessionLocal, engine
from backend.crud import user as user_crud
from backend.schemas import user as user_schemas
from backend.models import user as user_models

user_models.Base.metadata.create_all(bind=engine)

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get("/")
def read_user():
    return {
        "message": "Hello There :D"
    }