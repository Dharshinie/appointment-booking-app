import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Appointments from './pages/Appointments'
import AppointmentListPage from './pages/AppointmentListPage'

export default function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/appointments-list" element={<AppointmentListPage />} />
      </Routes>
    
  )
}
