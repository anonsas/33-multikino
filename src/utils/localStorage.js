function generateId(key) {
  let id = localStorage.getItem(key + '_id');

  if (id === null) id = 0;
  else id = parseInt(id);

  id++;
  localStorage.setItem(key + '_id', id);
  return id;
}

function readData(key) {
  const data = localStorage.getItem('key');

  if (data === null) {
    localStorage.setItem(key, JSON.stringify([]));
    return [];
  }

  return JSON.parse(data);
}

function writeData(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

// CRUD FUNCTIONALITY ===========================
export function create(key, data) {
  const d = readData(key);
  data.id = generateId(key);
  d.push(data);
  writeData(key, d);
}

export function read(key) {
  return readData(key);
}

export function update(key, data, id) {
  const d = readData(key);
  writeData(
    key,
    d.map((item) => (item.id !== id ? { ...item } : { ...item, ...data, id: id }))
  );
}

export function destroy(key, id) {
  const d = readData(key);
  writeData(d.filter((item) => item.id !== id));
}
