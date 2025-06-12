const baseUrl = "http://localhost:3001";

function getItems() {
  return fetch(`${baseUrl}/items`).then((res) => {
    return res.ok ? res.json() : Promise.reject(`Error ${res.status}`);
  });
}

function addItems({ name, imageUrl, weather }) {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    body: JSON.stringify({ name, imageUrl, weather }),
    headers: { "Content-Type": "application/json" },
  }).then((res) => {
    return res.ok ? res.json() : Promise.reject(`Error ${res.status}`);
  });
}

function deleteItems(id) {
  return fetch(`${baseUrl}/items/${id}`, { method: "DELETE" }).then((res) => {
    return res.ok ? res.json() : Promise.reject(`Error ${res.status}`);
  });
}

export { getItems, addItems, deleteItems };
