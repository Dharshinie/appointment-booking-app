import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import '../styles/pages.css'

export default function Pricing() {
  const navigate = useNavigate()

  const services = [
    {
      id: 1,
      category: 'Hair Services',
      items: [
        { name: 'Haircut & Style', price: '$35' },
        { name: 'Hair Coloring', price: '$65' },
        { name: 'Highlights/Lowlights', price: '$85' },
        { name: 'Hair Treatment', price: '$45' }
      ]
    },
    {
      id: 2,
      category: 'Facial & Skincare',
      items: [
        { name: 'Basic Facial', price: '$50' },
        { name: 'Hydra Facial', price: '$75' },
        { name: 'Chemical Peel', price: '$90' },
        { name: 'Microdermabrasion', price: '$85' }
      ]
    },
    {
      id: 3,
      category: 'Makeup Services',
      items: [
        { name: 'Makeup Application', price: '$40' },
        { name: 'Bridal Makeup', price: '$120' },
        { name: 'eyebrow Threading', price: '$15' },
        { name: 'Eyelash Extensions', price: '$80' }
      ]
    },
    {
      id: 4,
      category: 'Massage & Wellness',
      items: [
        { name: 'Swedish Massage (30 min)', price: '$45' },
        { name: 'Deep Tissue Massage (60 min)', price: '$75' },
        { name: 'Hot Stone Massage', price: '$85' },
        { name: 'Aromatherapy Massage', price: '$80' }
      ]
    }
  ]

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
          <h1 className="card-title">Our Pricing</h1>
          
          <div className="card-content pricing-content">
            <p className="intro-text">
              Quality services at competitive prices. All our services are performed by trained professionals using premium products.
            </p>

            <div className="pricing-grid">
              {services.map(category => (
                <div key={category.id} className="pricing-category">
                  <h3>{category.category}</h3>
                  <ul className="service-list">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="service-item">
                        <span className="service-name">{item.name}</span>
                        <span className="service-price">{item.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="pricing-notes">
              <h3>Important Notes</h3>
              <ul>
                <li>Prices may vary depending on hair length, texture, or specific requirements</li>
                <li>Package deals and group discounts available upon request</li>
                <li>First-time clients receive a 10% discount on their first service</li>
                <li>All prices include consultation</li>
                <li>Valid forms of payment: Cash, Credit Card, Debit Card</li>
              </ul>
            </div>

            <button className="btn" onClick={() => navigate('/appointments')}>
              Book Your Service Now
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
