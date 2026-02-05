import { useState } from 'react'

export default function AcademyEnroll() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="academy-enroll">
      <h1>Academy Enrollment</h1>

      {submitted ? (
        <div className="success-msg">
          🎉 Enrollment Successful! Our team will contact you soon.
        </div>
      ) : (
        <form className="enroll-form" onSubmit={handleSubmit}>
          <input placeholder="Full Name" required />
          <input placeholder="Email" type="email" required />
          <input placeholder="Phone Number" required />
          <input placeholder="Preferred Course" required />

          <button className="btn">Submit</button>
        </form>
      )}
    </div>
  )
}
