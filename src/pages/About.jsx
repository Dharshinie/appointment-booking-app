import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import '../styles/pages.css'

export default function About() {
  const navigate = useNavigate()

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
          <h1 className="card-title">About Us</h1>
          
          <div className="card-content about-content">
            <p>
              Welcome to DD Salon, your premier destination for beauty and wellness services. With over a decade of experience in the industry, we pride ourselves on delivering exceptional service and creating a welcoming atmosphere for all our clients.
            </p>
            
            <h3>Our Mission</h3>
            <p>
              Our mission is to provide high-quality beauty and wellness services that enhance confidence and well-being. We believe that everyone deserves to feel beautiful and pampered.
            </p>

            <h3>Our Values</h3>
            <ul>
              <li><strong>Excellence:</strong> We maintain the highest standards in all our services</li>
              <li><strong>Customer Care:</strong> Your satisfaction is our top priority</li>
              <li><strong>Professionalism:</strong> Our trained experts bring expertise to every service</li>
              <li><strong>Innovation:</strong> We stay updated with the latest trends and techniques</li>
            </ul>

            <h3>Why Choose Us?</h3>
            <p>
              At DD Salon, we combine professional expertise with a personal touch. Our team of skilled beauticians and therapists are dedicated to providing customized services tailored to your unique needs. We use premium products and maintain the highest hygiene standards to ensure your safety and comfort.
            </p>

            <button className="btn" onClick={() => navigate('/appointments')}>
              Book an Appointment
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
