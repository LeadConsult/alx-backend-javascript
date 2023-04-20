import ClassRoom from './0-classroom';

const initializeRooms = () => {
  const maxStudentsSize = [19, 20, 34];
  const newList = maxStudentsSize.map((size) => new ClassRoom(size));
  return newList;
}

export default initializeRooms;
// This function creates an array of class instances with the provided 
// maximum student size using the map function of arrays in ES6.

// It uses an arrow function and the const keyword to declare the 
// function and variables, respectively.
