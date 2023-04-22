// Returns a Promise that resolves to an object with firstName and lastName properties

export default function signUpUser(firstName, lastName) {
  return Promise.resolve({
    firstName,
    lastName,
  });
}
