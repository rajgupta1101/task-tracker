async function get(key) {
  const string_value = localStorage.getItem(key);
  return JSON.parse(string_value);
}

async function set(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

async function clear() {
  localStorage.clear();
}

export default { set, get, clear };
