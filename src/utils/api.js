const baseUrl = "http://localhost:3001";

function checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Error ${res.status}`);
}

function getItems() {
  return fetch(`${baseUrl}/items`).then(checkResponse);
}

function addItems({ name, imageUrl, weather }) {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    body: JSON.stringify({ name, imageUrl, weather }),
    headers: { "Content-Type": "application/json" },
  }).then(checkResponse);
}

function deleteItems(id) {
  return fetch(`${baseUrl}/items/${id}`, { method: "DELETE" }).then(
    checkResponse
  );
}

export { getItems, addItems, deleteItems };
