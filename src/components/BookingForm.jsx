import React, { useState } from 'react'

export default function BookingForm({ onAdd, onSuccessNavigate }) {
  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [service, setService] = useState('')

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

    // ✅ Navigate to appointment list page
    if (onSuccessNavigate) {
      onSuccessNavigate()
    }

    setName('')
    setDate('')
    setTime('')
    setService('')
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
