import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../index.css'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()

    if (!email || !password) {
      alert('Please enter email and password')
      return
    }

    navigate('/appointments')
  }

  return (
    <div className="page">
         <header className="header">
        <h2 className="header-heading">DD Salon Appointment Booking</h2>
      </header>
      <main className="main">
        <div className="card">
          <h1 className="card-title">Login</h1>

          <form className="form1" onSubmit={handleLogin}>
            <input
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />

            <button className="btn">Login</button>
          </form>
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
