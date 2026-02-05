import { useState } from 'react'
import '../index.css'

export default function Enquire() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    
    <div className="enquire-page">
         
      <h1>Enquire Now</h1>

      {submitted ? (
        <div className="success-message">
          ✅ Thank you! Your enquiry has been submitted successfully.
        </div>
      ) : (
        <form className="enquire-form" onSubmit={handleSubmit}>
          <input placeholder="Name" required />
          <input placeholder="Phone" required />
          <input placeholder="Location" required />
          <input placeholder="Email" type="email" required />

          <label className="confirm">
            <input type="checkbox" required />
            I confirm the information provided is accurate and valid.
          </label>

          <button type="submit">Submit</button>
        </form>
      )}
    </div>

  )
}
