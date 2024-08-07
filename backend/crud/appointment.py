from sqlalchemy.orm import Session
from backend.models import appointment as appointment_models

def remove_strings(strs1, strs2):
    set_strs2 = set(strs2)
    result = [s for s in strs1 if s not in set_strs2]
    return result

def get_appointments(db: Session, doctor_id: int, date: str):
    appointments = db.query(appointment_models.Appointment).filter(
        appointment_models.Appointment.doctor_id == doctor_id,
        appointment_models.Appointment.date == date
    ).all()

    appointment_times = [
        appointment.time for appointment in appointments
    ]

    times = [
        "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00"
    ]

    return remove_strings(times, appointment_times)