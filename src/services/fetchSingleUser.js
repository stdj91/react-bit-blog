function fetchSingleUser(id) {
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;

  return fetch(url).then(response => response.json());
}
export default fetchSingleUser;
