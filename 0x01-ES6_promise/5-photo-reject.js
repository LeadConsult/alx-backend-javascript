/**
 * This function uploads a photo and returns a promise.
 * @param {string} fileName - The name of the file to be uploaded.
 * @param {string} fileType - The type of the file to be uploaded.
 * @returns {Promise<string>} A promise that resolves to a success message or rejects with an error message.
 */

export default function uploadPhoto(fileName) {
  return Promise.reject(`${fileName} cannot be processed`);
}