from fastapi import HTTPException
from sqlalchemy.orm import Session
from backend.models import user as user_models
from backend.schemas import user as user_schemas
from backend.utils import hash, verify
from datetime import datetime, timedelta

import jwt

def create_user(db: Session, user: user_schemas.UserCreate):
    hashed_password = hash(user.password)
    user.password = hashed_password

    db_user = user_models.User(
        name=user.name,
        surname=user.surname,
        country=user.country,
        city=user.city,
        address=user.address,
        email=user.email,
        password=user.password,
        is_manager=False
    )

    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user
    
def login_user(db: Session, auth_details: user_schemas.UserAuth):
    user = db.query(user_models.User).filter(user_models.User.email == auth_details.email).first()

    if (user is None) or (not verify(auth_details.password, user.password)):
        raise HTTPException(status_code=401, detail='Invalid username and/or password')

    token = jwt.encode({
        'exp': datetime.utcnow() + timedelta(days=1),
        'iat': datetime.utcnow(),
        'id': user.id,
        'email': user.email
    },
        "SECRET",
        algorithm='HS256'
    )

    return { "token": token }



