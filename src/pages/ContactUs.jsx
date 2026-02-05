import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import '../styles/pages.css'

export default function ContactUs() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for contacting us! We will get back to you soon.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <div className="page">
      {/* HEADER */}
      <header className="header">
        <img src="https://img.freepik.com/premium-vector/modern-beauty-salon-logo-sophisticated-female-profile-design-stylish-branding_396380-162.jpg" className="logo" alt="DD Salon Logo" />
        <h2 className="header-heading">DD Salon</h2>
      </header>

      {/* MAIN */}
      <main className="main">
        <div className="card">
          <h1 className="card-title">Contact Us</h1>
          
          <div className="card-content contact-content">
            <div className="contact-info">
              <h3>Get in Touch</h3>
              <p><strong>Phone:</strong> +1 (555) 123-4567</p>
              <p><strong>Email:</strong> info@ddsalon.com</p>
              <p><strong>Address:</strong> 123 Beauty Lane, Style City, SC 12345</p>
              <p><strong>Hours:</strong> Monday - Saturday: 10 AM - 8 PM | Sunday: 11 AM - 6 PM</p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="field">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="field">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  required
                />
              </div>

              <div className="field">
                <label>Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your phone number"
                />
              </div>

              <div className="field">
                <label>Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  rows="5"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn">Send Message</button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
