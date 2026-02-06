import { useEffect, useState } from 'react'
import BookingForm from '../components/BookingForm'
import Footer from '../components/Footer'
import { addAppointmentToFirebase, getAppointmentsFromFirebase } from '../services/appointmentService'
import '../index.css'
import '../styles/pages.css'
import '../styles/footer.css'

export default function Appointments() {
  const [appointments, setAppointments] = useState([])
  const [error, setError] = useState(null)

  // Load initial appointments from Firebase
  useEffect(() => {
    const loadAppointments = async () => {
      try {
        const data = await getAppointmentsFromFirebase()
        setAppointments(data)
      } catch (err) {
        console.error('Error loading appointments:', err)
        // Fallback to empty array if Firebase fails
        setAppointments([])
      }
    }

    loadAppointments()
  }, [])

  const addAppointment = async (appt) => {
    try {
      setError(null)
      const id = await addAppointmentToFirebase(appt)
      // Add to local state
      setAppointments(prev => [...prev, { ...appt, id }])
    } catch (err) {
      console.error('Error adding appointment:', err)
      setError('Failed to save appointment to Firebase')
      // Fallback: add to local state anyway
      setAppointments(prev => [...prev, appt])
    }
  }

  return (
    <div className="page">
      {/* HEADER */}
      <header className="header">
        <img 
          src="https://img.freepik.com/premium-vector/modern-beauty-salon-logo-sophisticated-female-profile-design-stylish-branding_396380-162.jpg" 
          className="logo" 
          alt="DD Salon Logo" 
        />
        <h2 className="header-heading">DD Salon Appointment Booking</h2>
      </header>

      {/* MAIN */}
      <main className="main">
        <div className="card">
          <h1 className="card-title">Book Your Appointment</h1>

          {error && (
            <div style={{
              background: '#fff3cd',
              color: '#856404',
              padding: '12px 16px',
              borderRadius: '6px',
              marginBottom: '20px',
              border: '1px solid #ffc107'
            }}>
              ℹ️ {error} (Saving locally)
            </div>
          )}

          <div className="card-content">
            <BookingForm onAdd={addAppointment} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
