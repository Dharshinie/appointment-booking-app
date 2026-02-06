// Firebase Error Handling Utilities

/**
 * Get user-friendly error messages from Firebase errors
 * @param {Error} error - The Firebase error
 * @returns {string} - User-friendly error message
 */
export const getFirebaseErrorMessage = (error) => {
  const errorCode = error.code || error.message

  const errorMessages = {
    'permission-denied': 'Access denied. Please check Firebase security rules.',
    'not-found': 'Document not found.',
    'already-exists': 'This appointment already exists.',
    'failed-precondition': 'Operation failed. Please try again.',
    'aborted': 'Operation was aborted.',
    'out-of-range': 'Invalid data.',
    'unauthenticated': 'You need to sign in.',
    'invalid-argument': 'Invalid data provided.',
    'firestore/permission-denied': 'You don\'t have permission to access this.',
    'firestore/resource-exhausted': 'Too many requests. Please try again later.',
  }

  return errorMessages[errorCode] || 'An error occurred. Please try again.'
}

/**
 * Check if Firebase is properly configured
 * @returns {boolean} - True if configured, false otherwise
 */
export const isFirebaseConfigured = () => {
  const requiredEnvVars = [
    'REACT_APP_FIREBASE_API_KEY',
    'REACT_APP_FIREBASE_AUTH_DOMAIN',
    'REACT_APP_FIREBASE_PROJECT_ID',
    'REACT_APP_FIREBASE_STORAGE_BUCKET',
    'REACT_APP_FIREBASE_MESSAGING_SENDER_ID',
    'REACT_APP_FIREBASE_APP_ID'
  ]

  return requiredEnvVars.every(
    envVar => import.meta.env[envVar] && import.meta.env[envVar] !== `YOUR_${envVar.split('_').pop()}`
  )
}

/**
 * Convert Firebase timestamp to readable date
 * @param {Timestamp} timestamp - Firestore Timestamp
 * @returns {string} - Formatted date string
 */
export const formatFirebaseDate = (timestamp) => {
  if (!timestamp) return 'N/A'
  
  try {
    const date = timestamp.toDate?.() || new Date(timestamp)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  } catch (error) {
    console.error('Error formatting date:', error)
    return 'N/A'
  }
}

/**
 * Log Firebase operation
 * @param {string} operation - Operation name (e.g., 'ADD_APPOINTMENT')
 * @param {string} status - 'success' or 'error'
 * @param {any} data - Data to log
 */
export const logFirebaseOperation = (operation, status, data) => {
  const timestamp = new Date().toLocaleTimeString()
  const message = `[${timestamp}] ${operation} - ${status.toUpperCase()}`
  
  if (status === 'success') {
    console.log(`✅ ${message}`, data)
  } else {
    console.error(`❌ ${message}`, data)
  }
}

/**
 * Retry a Firebase operation with exponential backoff
 * @param {Function} operation - Async function to retry
 * @param {number} maxRetries - Maximum number of retries (default: 3)
 * @param {number} baseDelay - Base delay in ms (default: 1000)
 * @returns {Promise} - Result of operation
 */
export const retryFirebaseOperation = async (
  operation,
  maxRetries = 3,
  baseDelay = 1000
) => {
  let lastError

  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      return await operation()
    } catch (error) {
      lastError = error
      
      // Don't retry permission errors
      if (error.code === 'permission-denied') {
        throw error
      }

      // Calculate delay with exponential backoff
      const delay = baseDelay * Math.pow(2, attempt)
      console.warn(`Retry attempt ${attempt + 1}/${maxRetries} after ${delay}ms...`)
      
      await new Promise(resolve => setTimeout(resolve, delay))
    }
  }

  throw lastError
}

/**
 * Validate appointment data before saving
 * @param {Object} appointment - Appointment data
 * @returns {Object} - { valid: boolean, errors: string[] }
 */
export const validateAppointmentData = (appointment) => {
  const errors = []

  if (!appointment.name || appointment.name.trim() === '') {
    errors.push('Name is required')
  }

  if (!appointment.date || appointment.date.trim() === '') {
    errors.push('Date is required')
  }

  if (!appointment.time || appointment.time.trim() === '') {
    errors.push('Time is required')
  }

  // Validate date format
  if (appointment.date && !/^\d{4}-\d{2}-\d{2}$/.test(appointment.date)) {
    errors.push('Invalid date format')
  }

  // Validate time format
  if (appointment.time && !/^\d{2}:\d{2}$/.test(appointment.time)) {
    errors.push('Invalid time format')
  }

  return {
    valid: errors.length === 0,
    errors
  }
}

/**
 * Sanitize user input to prevent injection attacks
 * @param {string} input - User input
 * @returns {string} - Sanitized input
 */
export const sanitizeInput = (input) => {
  if (typeof input !== 'string') {
    return input
  }

  return input
    .trim()
    .replace(/[<>]/g, '')
    .slice(0, 500) // Limit length
}

/**
 * Track Firebase performance metrics
 * @param {string} operationName - Name of operation
 * @param {Function} operation - Async operation to measure
 * @returns {Promise} - Result of operation
 */
export const measureFirebaseOperation = async (operationName, operation) => {
  const startTime = performance.now()

  try {
    const result = await operation()
    const duration = performance.now() - startTime
    
    console.log(`⏱️ ${operationName} completed in ${duration.toFixed(2)}ms`)
    return result
  } catch (error) {
    const duration = performance.now() - startTime
    console.error(`❌ ${operationName} failed after ${duration.toFixed(2)}ms`, error)
    throw error
  }
}
