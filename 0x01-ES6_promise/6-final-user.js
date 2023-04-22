/* eslint-disable no-console */
import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default async function handleProfileSignup(firstName, lastName, fileName) {
const signUpUserPromise = signUpUser(firstName, lastName);
const uploadPhotoPromise = uploadPhoto(fileName);

try {
const [user, photo] = await Promise.all([signUpUserPromise, uploadPhotoPromise]);
console.log(`User ${user.firstName} ${user.lastName} signed up successfully. 
            Photo ${fileName} uploaded successfully.`);
return [{ status: 'fulfilled', value: user }, { status: 'fulfilled', value: photo }];
} 
catch (error) {
// console.log('Error:', error.message);
return [{ status: 'rejected', value: error.message }];
}
}