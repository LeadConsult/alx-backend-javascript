/* eslint-disable no-console */

/**
 * Handles a response from the API by returning a promise that resolves with a status of 200 and body of 'success' on success, or rejects with an error on failure. Logs a message when the response is received, regardless of success or failure.
 * 
 * @param {Promise} promise - A promise returned from the API call.
 * @returns {Promise} - A promise that resolves with a status of 200 and body of 'success' on success, or rejects with an error on failure.
 */

export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => ({ status: 200, body: 'success' }))
    .catch(() => new Error())
    .finally(() => console.log('API response received.'));
}

