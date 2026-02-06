import { useEffect, useState } from 'react'
import AppointmentList from '../components/AppointmentList'
import Footer from '../components/Footer'
import { getAppointmentsFromFirebase, deleteAppointmentFromFirebase } from '../services/appointmentService'
import '../index.css'
import '../styles/footer.css'

export default function AppointmentListPage() {
  const [appointments, setAppointments] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Load appointments from Firebase
  useEffect(() => {
    const loadAppointments = async () => {
      try {
        setLoading(true)
        const data = await getAppointmentsFromFirebase()
        setAppointments(data)
        setError(null)
      } catch (err) {
        console.error('Error loading appointments:', err)
        setError('Failed to load appointments. Using local data.')
        // Fallback to local storage
        try {
          const localData = localStorage.getItem('appointments')
          setAppointments(localData ? JSON.parse(localData) : [])
        } catch (e) {
          setAppointments([])
        }
      } finally {
        setLoading(false)
      }
    }

    loadAppointments()
  }, [])

  const removeAppointment = async (id) => {
    try {
      await deleteAppointmentFromFirebase(id)
      setAppointments(prev => prev.filter(a => a.id !== id))
    } catch (err) {
      console.error('Error deleting appointment:', err)
      // Fallback: remove from local state
      setAppointments(prev => prev.filter(a => a.id !== id))
    }
  }

  return (
    <div className="page">
      <header className="header">
        <img 
          src="https://img.freepik.com/premium-vector/modern-beauty-salon-logo-sophisticated-female-profile-design-stylish-branding_396380-162.jpg" 
          className="logo" 
          alt="DD Salon Logo" 
        />
        <h2 className="header-heading">Appointment List</h2>
      </header>

      <main className="main">
        <div className="card">
          {error && (
            <div style={{
              background: '#fff3cd',
              color: '#856404',
              padding: '12px 16px',
              borderRadius: '6px',
              marginBottom: '20px',
              border: '1px solid #ffc107'
            }}>
              {error}
            </div>
          )}

          {loading ? (
            <div style={{
              textAlign: 'center',
              padding: '40px',
              color: '#666'
            }}>
              <p>Loading appointments...</p>
            </div>
          ) : (
            <AppointmentList
              appointments={appointments}
              onRemove={removeAppointment}
            />
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
