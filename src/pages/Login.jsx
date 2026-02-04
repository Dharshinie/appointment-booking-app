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
      {/* ================= HEADER ================= */}
      <header className="header">
        <img
          src="https://img.freepik.com/premium-vector/modern-beauty-salon-logo-sophisticated-female-profile-design-stylish-branding_396380-162.jpg"
          className="logo"
          alt="DD Salon Logo"
        />
        <h2 className="header-heading">DD Salon Appointment Booking</h2>
      </header>

      {/* ================= HERO IMAGE ================= */}
      <section className="hero">
        <img
          src="https://img.freepik.com/free-photo/pink-model-career-kit-arrangement_23-2150083965.jpg?semt=ais_hybrid&w=740&q=80"
          alt="Salon"
          className="hero-img"
        />
        <div className="hero-overlay">
          <h1>DD Salon</h1>
          <p>Style • Care • Confidence</p>
          <span>Open: 9 AM – 8 PM</span>
        </div>
      </section>

      {/* ================= LOGIN ================= */}
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

      {/* ================= OFFERS ================= */}
      <section className="offers">
        <h2>Special Offers</h2>

        <div className="offer-grid">
          <div className="offer-box">🎉 20% Off on First Booking</div>
          <div className="offer-box">💇 Free Hair Spa on 3 Services</div>
          <div className="offer-box">👰 Bridal Package Discount</div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="faq">
        <h2>Frequently Asked Questions</h2>

        <details>
          <summary>How do I book an appointment?</summary>
          <p>Login and select your preferred date and time.</p>
        </details>

        <details>
          <summary>Can I cancel my appointment?</summary>
          <p>Yes, cancellation is allowed up to 2 hours before.</p>
        </details>

        <details>
          <summary>Do you accept walk-ins?</summary>
          <p>Yes, subject to availability.</p>
        </details>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="footer">
        <p>© 2026 DD Salon Booking App</p>
        <div className="footer-links">
          <span>About Us</span>
          <span>Contact</span>
          <span>Privacy Policy</span>
          <span>Terms & Conditions</span>
        </div>
      </footer>
    </div>
  )
}
