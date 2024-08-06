from pydantic import BaseModel

class Doctor(BaseModel):
    id: int
    firstName: str
    lastName: str
    specialization: str
    image: str

    class Config:
        orm_mode = True