// Increasing movies_id - to track all movies.
// To be used for the following created data.
// Scenario: We deleted item with id:10, and created a new data.
// It automatically would create with id:10, which we don't want.
function generateDataId(key) {
  const keyName = `${key}_id`; // 'movies_id' : id
  let id = localStorage.getItem(keyName);

  id === null ? (id = 0) : (id = parseInt(id));

  id++;
  localStorage.setItem(keyName, id);
  return id;
}
//----------------------

// key = 'movies' []
function readData(key) {
  const data = localStorage.getItem(key);

  if (data === null) {
    localStorage.setItem(key, JSON.stringify([]));
    return [];
  }

  return JSON.parse(data);
}
//----------------------

function writeData(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
//----------------------

// CRUD FUNCTIONALITY ===========================
export function create(key, data) {
  const d = readData(key); // 'movies' []
  data.id = generateDataId(key); // we assign id to data.id, based on 'movies_id'
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
    d.map((item) => (item.id === id ? { ...item, ...data, id: id } : { ...item }))
  );
}

export function destroy(key, id) {
  const d = readData(key);
  writeData(
    key,
    d.filter((item) => item.id !== id)
  );
}
