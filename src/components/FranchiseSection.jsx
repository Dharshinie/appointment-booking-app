import { useNavigate } from 'react-router-dom'

export default function FranchiseSection() {
  const navigate = useNavigate()

  return (
    <section className="franchise-section">
      <div className="franchise-content">
        <h2>Franchise Opportunity with DD</h2>

        <div className="franchise-card">
          <h3>Proven Return On Investment</h3>
          <p>
            Starting a franchise with DD presents an opportunity to increase
            your investment in a systematic and steady manner. Our tried-and-tested
            business model minimizes risks while maximizing potential profits.
          </p>
          <p>
            Experience a significant ROI within <strong>36 – 48 months</strong>,
            thanks to our proven business strategies.
          </p>
        
          <button
            className="enquire-btn"
            onClick={() => navigate('/enquire')}
          >
            Enquire Now
          </button>
        </div>
      </div>
    </section>
  )
}
