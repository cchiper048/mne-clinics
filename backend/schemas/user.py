from pydantic import BaseModel

class UserBase(BaseModel):
    email: str
    name: str
    surname: str
    country: str
    city: str
    address: str

class UserCreate(UserBase):
    password: str

class UserUpdate(BaseModel):
    email: str
    password: str

class UserAuth(BaseModel):
    email: str
    password: str

class User(UserBase):
    id: int

    class Config:
        orm_mode = True
