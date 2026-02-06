// Firebase Service for managing appointments
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
  query,
  where,
  orderBy
} from 'firebase/firestore'
import { db } from '../config/firebase'

const APPOINTMENTS_COLLECTION = 'appointments'

/**
 * Add a new appointment to Firestore
 * @param {Object} appointmentData - The appointment data
 * @returns {Promise<string>} - The appointment ID
 */
export const addAppointmentToFirebase = async (appointmentData) => {
  try {
    const docRef = await addDoc(
      collection(db, APPOINTMENTS_COLLECTION),
      {
        ...appointmentData,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    )
    console.log('Appointment added with ID:', docRef.id)
    return docRef.id
  } catch (error) {
    console.error('Error adding appointment:', error)
    throw error
  }
}

/**
 * Get all appointments from Firestore
 * @returns {Promise<Array>} - Array of appointments
 */
export const getAppointmentsFromFirebase = async () => {
  try {
    const querySnapshot = await getDocs(
      query(
        collection(db, APPOINTMENTS_COLLECTION),
        orderBy('date', 'asc')
      )
    )
    
    const appointments = []
    querySnapshot.forEach((doc) => {
      appointments.push({
        id: doc.id,
        ...doc.data()
      })
    })
    
    console.log('Fetched appointments:', appointments.length)
    return appointments
  } catch (error) {
    console.error('Error fetching appointments:', error)
    throw error
  }
}

/**
 * Delete an appointment from Firestore
 * @param {string} appointmentId - The appointment ID
 * @returns {Promise<void>}
 */
export const deleteAppointmentFromFirebase = async (appointmentId) => {
  try {
    await deleteDoc(doc(db, APPOINTMENTS_COLLECTION, appointmentId))
    console.log('Appointment deleted:', appointmentId)
  } catch (error) {
    console.error('Error deleting appointment:', error)
    throw error
  }
}

/**
 * Update an appointment in Firestore
 * @param {string} appointmentId - The appointment ID
 * @param {Object} updateData - The data to update
 * @returns {Promise<void>}
 */
export const updateAppointmentInFirebase = async (appointmentId, updateData) => {
  try {
    await updateDoc(doc(db, APPOINTMENTS_COLLECTION, appointmentId), {
      ...updateData,
      updatedAt: new Date()
    })
    console.log('Appointment updated:', appointmentId)
  } catch (error) {
    console.error('Error updating appointment:', error)
    throw error
  }
}

/**
 * Get appointments by date
 * @param {string} date - The date to filter by (YYYY-MM-DD format)
 * @returns {Promise<Array>} - Array of appointments for the given date
 */
export const getAppointmentsByDate = async (date) => {
  try {
    const startOfDay = new Date(date)
    startOfDay.setHours(0, 0, 0, 0)
    
    const endOfDay = new Date(date)
    endOfDay.setHours(23, 59, 59, 999)

    const querySnapshot = await getDocs(
      query(
        collection(db, APPOINTMENTS_COLLECTION),
        where('date', '>=', startOfDay),
        where('date', '<=', endOfDay),
        orderBy('time', 'asc')
      )
    )
    
    const appointments = []
    querySnapshot.forEach((doc) => {
      appointments.push({
        id: doc.id,
        ...doc.data()
      })
    })
    
    return appointments
  } catch (error) {
    console.error('Error fetching appointments by date:', error)
    throw error
  }
}
