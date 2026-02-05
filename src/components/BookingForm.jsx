import React, { useState } from 'react'

export default function BookingForm({ onAdd }) {
  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [service, setService] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const submit = (e) => {
    e.preventDefault()

    if (!name || !date || !time) {
      alert('Please fill in all required fields.')
      return
    }

    const appt = {
      id: `${Date.now()}-${Math.floor(Math.random() * 10000)}`,
      name,
      date,
      time,
      service
    }

    onAdd(appt)

    // Show success message instead of navigating
    setIsSubmitted(true)

    // Reset form
    setName('')
    setDate('')
    setTime('')
    setService('')

    // Hide success message after 5 seconds and reset
    setTimeout(() => {
      setIsSubmitted(false)
    }, 8000)
  }

  if (isSubmitted) {
    return (
      <div className="success-message-container">
        <div className="success-icon">✓</div>
        <h2>Thank you for reaching us!</h2>
        <p>We'll contact you soon!!</p>
      </div>
    )
  }

  return (
    <form className="form" onSubmit={submit}>
      <div className="field">
        <label>Name</label>
        <input
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Client name"
        />
      </div>

      <div className="field-row">
        <div className="field">
          <label>Date</label>
          <input
            type="date"
            value={date}
            onChange={e => setDate(e.target.value)}
          />
        </div>

        <div className="field">
          <label>Time</label>
          <input
            type="time"
            value={time}
            onChange={e => setTime(e.target.value)}
          />
        </div>
      </div>

      <div className="field">
        <label>Service (optional)</label>
        <input
          value={service}
          onChange={e => setService(e.target.value)}
          placeholder="e.g., Consultation"
        />
      </div>

      <button type="submit" className="btn">
        Book Appointment
      </button>
    </form>
  )
}
