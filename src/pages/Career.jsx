import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import '../styles/pages.css'

export default function Career() {
  const navigate = useNavigate()

  const jobs = [
    {
      id: 1,
      title: 'Senior Beautician',
      department: 'Beauty Services',
      location: 'New York, NY',
      description: 'We are looking for experienced beauticians with 5+ years of experience in hair styling and makeup.'
    },
    {
      id: 2,
      title: 'Massage Therapist',
      department: 'Wellness',
      location: 'New York, NY',
      description: 'Join our wellness team! Experience in therapeutic massage is required. Certification is preferred.'
    },
    {
      id: 3,
      title: 'Salon Manager',
      department: 'Management',
      location: 'New York, NY',
      description: 'Looking for a dynamic manager with salon operations experience and strong leadership skills.'
    },
    {
      id: 4,
      title: 'Esthetician',
      department: 'Skincare',
      location: 'New York, NY',
      description: 'Skincare specialist to provide facial treatments and skincare consultations to our clients.'
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
          <h1 className="card-title">Career Opportunities</h1>
          
          <div className="card-content career-content">
            <p className="intro-text">
              Join our growing team at DD Salon! We are always looking for passionate professionals who share our commitment to excellence and customer satisfaction. If you love beauty and wellness, we'd love to hear from you!
            </p>

            <h3>Current Job Openings</h3>
            
            <div className="job-listings">
              {jobs.map(job => (
                <div key={job.id} className="job-card">
                  <div className="job-header">
                    <h4>{job.title}</h4>
                    <span className="job-location">{job.location}</span>
                  </div>
                  <p className="job-department"><strong>Department:</strong> {job.department}</p>
                  <p className="job-description">{job.description}</p>
                  <button className="btn btn-small">Apply Now</button>
                </div>
              ))}
            </div>

            <h3 style={{ marginTop: '30px' }}>Why Work With Us?</h3>
            <ul>
              <li>Competitive salary and benefits package</li>
              <li>Professional development and training opportunities</li>
              <li>Friendly and supportive work environment</li>
              <li>Flexible scheduling options</li>
              <li>Career growth opportunities</li>
            </ul>

            <p style={{ marginTop: '20px' }}>
              <strong>Interested in joining our team?</strong> Send your resume to <strong>careers@ddsalon.com</strong>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
