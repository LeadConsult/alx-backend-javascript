// Disable the eslint no-console rule since we need to log the output
/* eslint-disable no-console */

import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  try {
    // Await the resolution of the two promises and destructure the response
    const [photo, user] = await Promise.all([uploadPhoto(), createUser()]);
    console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
  } catch (error) {
    // Log an error message if either of the promises reject
    console.log('Signup system offline');
  }
}
