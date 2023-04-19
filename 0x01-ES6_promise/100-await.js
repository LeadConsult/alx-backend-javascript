// Importing the necessary functions from the utils.js file
import { uploadPhoto, createUser } from './utils';

// Defining an asynchronous function to upload a photo and create a user
export default async function asyncUploadUser() {
  try {
    // Using Promise.all to execute both promises simultaneously
    const [photo, user] = await Promise.all([
      uploadPhoto(),
      createUser(),
    ]);
    // If both promises are resolved, return the response as an object
    return {
      photo,
      user,
    };
  } catch (error) {
    // If there's an error, return a default response as an object
    return { 
        photo: null, 
        user: null 
    };
  }
}
