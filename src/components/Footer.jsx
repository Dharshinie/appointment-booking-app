import { useNavigate } from 'react-router-dom'
import '../styles/footer.css'

export default function Footer() {
  const navigate = useNavigate()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <p className="footer-copyright">© 2026 DD Salon Booking App. All rights reserved.</p>
          <div className="footer-links">
            <button 
              className="footer-link"
              onClick={() => navigate('/')}
            >
              Home
            </button>
            <button 
              className="footer-link"
              onClick={() => navigate('/about')}
            >
              About Us
            </button>
            <button 
              className="footer-link"
              onClick={() => navigate('/contact')}
            >
              Contact Us
            </button>
            <button 
              className="footer-link"
              onClick={() => navigate('/career')}
            >
              Career
            </button>
            <button 
              className="footer-link"
              onClick={() => navigate('/pricing')}
            >
              Pricing
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
