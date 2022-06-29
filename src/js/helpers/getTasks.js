const getTasks = (url) => {
  return fetch(url, { method: 'GET' })
    .then(res => {
      if (res.ok) {
        return res.json()
      }
    })
    .catch(error => console.error(error))
}

const updateTasks = (url, newTasks) => {
  fetch(url,
    {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTasks)
    })
    .then(res => res.json())
    .then(data => console.log(data))
}

export { getTasks, updateTasks }