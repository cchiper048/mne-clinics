from sqlalchemy import Table, ForeignKey, Column
from backend.db import Base
from backend.models.user import User
from backend.models.profile import Profile 


doctor_medical_specialities_table = Table(
    "doctor_medical_specialities",
    Base.metadata,

    Column("doctor_id", ForeignKey("doctors.id")),
    Column("medical_specialities_id", ForeignKey("medical_specialities.id"))
)