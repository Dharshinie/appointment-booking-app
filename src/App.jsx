import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Enquire from './pages/Enquire'
import Appointments from './pages/Appointments'
import AppointmentListPage from './pages/AppointmentListPage'
import Enroll from './pages/Enroll'

export default function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/enquire" element={<Enquire />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/appointments-list" element={<AppointmentListPage />} />
        <Route path="/academy-enroll" element={<Enroll />} />
      </Routes>
    
  )
}
