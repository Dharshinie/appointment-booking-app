import { useEffect, useState } from 'react'
import BookingForm from '../components/BookingForm'
import { useNavigate } from 'react-router-dom'
import { loadAppointments, saveAppointments } from '../utils/storage'
import '../index.css'

export default function Appointments() {
  const [appointments, setAppointments] = useState(() => loadAppointments())
  const navigate = useNavigate()

  useEffect(() => {
    saveAppointments(appointments)
  }, [appointments])

  const addAppointment = (appt) =>
    setAppointments(prev => [...prev, appt])

  const removeAppointment = (id) =>
    setAppointments(prev => prev.filter(a => a.id !== id))

  return (
    <div className="page">
      {/* HEADER */}
      <header className="header">
        <img src="https://img.freepik.com/premium-vector/modern-beauty-salon-logo-sophisticated-female-profile-design-stylish-branding_396380-162.jpg" className="logo" alt="DD Salon Logo" />
        <h2 className="header-heading">DD Salon Appointment Booking</h2>
      </header>

      {/* MAIN */}
      <main className="main">
        <div className="card">
          <h1 className="card-title">Book Your Appointment</h1>

          <div className="card-content">
            <BookingForm onAdd={addAppointment} 
            onSuccessNavigate={() => navigate('/appointments-list')} />
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 DD Salon Booking App</p>
        <div className="footer-links">
          <span>.About Us</span>
          <span>.Contact</span>
          <span>.Privacy Policy</span>
          <span>.Terms & Conditions</span>
        </div>
      </footer>
    </div>
  )
}
