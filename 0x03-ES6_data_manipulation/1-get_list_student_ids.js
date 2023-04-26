export default function getListStudentIds(objectsArray) {
  const ids = objectsArray.map(obj => obj.id);
  return ids;
}
