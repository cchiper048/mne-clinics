from fastapi import FastAPI
from .routers import user, appointment_status, service, doctor, appointment, doctor_absence, medical_speciality, doctor_medical_speciality, profile, user_doctor, user_profile

app = FastAPI()

app.include_router(user.router)
app.include_router(appointment_status.router)
app.include_router(service.router)
app.include_router(doctor.router)
app.include_router(appointment.router)
app.include_router(doctor_absence.router)
app.include_router(doctor_medical_speciality.router)
app.include_router(medical_speciality.router)
app.include_router(profile.router)
app.include_router(user_doctor.router)
app.include_router(user_profile.router)
