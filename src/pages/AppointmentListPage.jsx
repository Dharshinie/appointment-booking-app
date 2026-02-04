import AppointmentList from '../components/AppointmentList'
import { loadAppointments, saveAppointments } from '../utils/storage'
import { useEffect, useState } from 'react'
import '../index.css'

export default function AppointmentListPage() {
  const [appointments, setAppointments] = useState(() => loadAppointments())

  useEffect(() => {
    saveAppointments(appointments)
  }, [appointments])

  const removeAppointment = (id) =>
    setAppointments(prev => prev.filter(a => a.id !== id))

  return (
    <div className="page">
      <header className="header">
        <img src="https://img.freepik.com/premium-vector/modern-beauty-salon-logo-sophisticated-female-profile-design-stylish-branding_396380-162.jpg" className="logo" alt="DD Salon Logo" />
        <h2 className="header-heading">Appointment List</h2>
      </header>

      <main className="main">
        <div className="card">
          <AppointmentList
            appointments={appointments}
            onRemove={removeAppointment}
          />
        </div>
      </main>
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
