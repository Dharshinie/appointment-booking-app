import React from 'react'

export default function AppointmentList({ appointments, onRemove }) {
  if (!appointments || appointments.length === 0) return <p>No appointments yet.</p>

  return (
    <div className="list">
      {appointments.map(a => (
        <div key={a.id} className="card">
          <div className="card-left">
            <div className="name">{a.name}</div>
            <div className="meta">{a.date} • {a.time}</div>
            {a.service && <div className="service">{a.service}</div>}
          </div>
          <div className="card-right">
            <button className="btn danger" onClick={() => onRemove(a.id)}>Cancel</button>
          </div>
        </div>
      ))}
    </div>
  )
}
