import { useEffect, useState } from 'react'
import BookingForm from '../components/BookingForm'
import Footer from '../components/Footer'
import { loadAppointments, saveAppointments } from '../utils/storage'
import '../index.css'
import '../styles/pages.css'
import '../styles/footer.css'

export default function Appointments() {
  const [appointments, setAppointments] = useState(() => loadAppointments())

  useEffect(() => {
    saveAppointments(appointments)
  }, [appointments])

  const addAppointment = (appt) =>
    setAppointments(prev => [...prev, appt])

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
            <BookingForm onAdd={addAppointment} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
