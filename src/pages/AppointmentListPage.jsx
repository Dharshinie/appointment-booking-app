import AppointmentList from '../components/AppointmentList'
import Footer from '../components/Footer'
import { loadAppointments, saveAppointments } from '../utils/storage'
import { getAppointmentsFromFirebase, deleteAppointmentFromFirebase } from '../services/appointmentService'
import { useEffect, useState } from 'react'
import '../index.css'
import '../styles/footer.css'

export default function AppointmentListPage() {
  const [appointments, setAppointments] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    loadAppointmentsFromFirebase()
  }, [])

  const loadAppointmentsFromFirebase = async () => {
    try {
      setLoading(true)
      const firebaseAppointments = await getAppointmentsFromFirebase()
      setAppointments(firebaseAppointments)
      saveAppointments(firebaseAppointments) // Also save locally
      setError(null)
    } catch (err) {
      console.error('Error loading appointments:', err)
      // Fallback to local storage
      const localAppointments = loadAppointments()
      setAppointments(localAppointments)
      setError('Using local data. Firebase sync unavailable.')
    } finally {
      setLoading(false)
    }
  }

  const removeAppointment = async (id) => {
    try {
      // Delete from Firebase
      await deleteAppointmentFromFirebase(id)
      // Update local state
      setAppointments(prev => prev.filter(a => a.id !== id))
    } catch (err) {
      console.error('Error deleting appointment:', err)
      alert('Failed to delete appointment')
    }
  }

  return (
    <div className="page">
      <header className="header">
        <img src="https://img.freepik.com/premium-vector/modern-beauty-salon-logo-sophisticated-female-profile-design-stylish-branding_396380-162.jpg" className="logo" alt="DD Salon Logo" />
        <h2 className="header-heading">Appointment List</h2>
      </header>

      <main className="main">
        <div className="card">
          {loading && <p>Loading appointments...</p>}
          {error && <p style={{ color: 'orange' }}>{error}</p>}
          <AppointmentList
            appointments={appointments}
            onRemove={removeAppointment}
          />
        </div>
      </main>
      <Footer />
    </div>
  )
}
