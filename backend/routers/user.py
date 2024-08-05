from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from backend.db import SessionLocal, engine
from backend.crud import user as user_crud
from backend.schemas import user as user_schemas
from backend.models import user as user_models

user_models.Base.metadata.create_all(bind=engine)

router = APIRouter()
auth_handler = user_crud.AuthHandler()

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

@router.post("/register/", response_model=user_schemas.User)
def register_user(user: user_schemas.UserCreate, db: Session = Depends(get_db)):
    return user_crud.create_user(db=db, user=user)
    

@router.post("/login/")
def login_user(auth_details: user_schemas.UserAuth, db: Session = Depends(get_db)):
    return user_crud.login_user(db=db, auth_details=auth_details)

@router.get("/test-protected/")
def test(id=Depends(auth_handler.auth_wrapper)):
    return { 'status': 'works' }