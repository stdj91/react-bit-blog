function fetchPosts(id) {
  const url = `https://jsonplaceholder.typicode.com/users/${id}/posts`;

  return fetch(url).then(response => response.json());
}
export default fetchPosts;
