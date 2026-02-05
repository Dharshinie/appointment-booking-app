import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Enquire from './pages/Enquire'
import Appointments from './pages/Appointments'
import AppointmentListPage from './pages/AppointmentListPage'
import Enroll from './pages/Enroll'
import About from './pages/About'
import ContactUs from './pages/ContactUs'
import Career from './pages/Career'
import Pricing from './pages/Pricing'

export default function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/enquire" element={<Enquire />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/appointments-list" element={<AppointmentListPage />} />
        <Route path="/academy-enroll" element={<Enroll />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/career" element={<Career />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    
  )
}
