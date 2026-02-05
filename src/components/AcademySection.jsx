import { useNavigate } from 'react-router-dom'

export default function AcademySection() {
  const navigate = useNavigate()

  return (
    <section className="academy">
      <div className="academy-content">
        <h2><i class="fas fa-dice-d6    "></i> Beauty Academy</h2>
        <h4>Learn with the International Experts</h4>

        <p>
          Join DD Beauty Academy to gain top-tier beauty training from
          industry experts. Our programs provide hands-on experience and
          essential skills using premium products.
        </p>

        <button
          className="btn academy-btn"
          onClick={() => navigate('/academy-enroll')}
        >
          Enroll Now
        </button>
      </div>

      <div className="academy-image">
        <img
          src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
          alt="Academy"
        />
      </div>
    </section>
  )
}
