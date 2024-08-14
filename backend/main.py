from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .routers import user, appointment_status, service, doctor, appointment, doctor_absence, medical_speciality, doctor_medical_speciality, profile, user_doctor, user_profile

app = FastAPI()

origins = [
    "*",
    "http://localhost",
    "http://localhost:8080",
    "http://localhost:5173",
    "http://localhost:8000",
    "https://subtle-parfait-5faeca.netlify.app",
    "https://subtle-parfait-5faeca.netlify.app/",
    "https://netlify.app",
    "https://netlify.app/",
    "http://localhost:80",
    "https://633b-109-228-127-3.ngrok-free.app"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

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
