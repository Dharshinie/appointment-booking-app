import AppointmentList from '../components/AppointmentList'
import Footer from '../components/Footer'
import { loadAppointments, saveAppointments } from '../utils/storage'
import { useEffect, useState } from 'react'
import '../index.css'
import '../styles/footer.css'

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
      <Footer />
    </div>
  )
}
