export function getRandomId() {
  return "_id" + Date.now() + Math.round(Math.random() * 1000);
}

export function getCurrentDateTime() {
  return new Date().toISOString().slice(0, -1);
}
