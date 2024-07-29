from sqlalchemy import Table, ForeignKey, Column
from backend.db import Base
from backend.models.user import User
from backend.models.profile import Profile 


user_doctor_table = Table(
    "user_doctor",
    Base.metadata,

    Column("user_id", ForeignKey("users.id")),
    Column("doctor_id", ForeignKey("doctors.id"))
)