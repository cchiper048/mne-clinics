from sqlalchemy import Table, ForeignKey, Column
from backend.db import Base
from backend.models.user import User
from backend.models.profile import Profile 


user_profile_table = Table(
    "user_profile",
    Base.metadata,

    Column("user_id", ForeignKey("users.id")),
    Column("profile_id", ForeignKey("profiles.id"))
)