function generateId(key) {
  let id = localStorage.getItem(key + '_id');

  if (!id) id = 0;
  else id = parseInt(id);

  id++;
  localStorage.setItem(key + '_id', id);
  return id;
}
