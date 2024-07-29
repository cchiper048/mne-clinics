from pydantic import BaseModel

class UserBase(BaseModel):
    email: str

class UserCreate(UserBase):
    password: str

class UserUpdate(BaseModel):
    email: str = None

class User(UserBase):
    id: int

    class Config:
        orm_mode = True
