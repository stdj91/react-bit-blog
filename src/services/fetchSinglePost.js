function fetchSinglePost(id) {
  const url = `https://jsonplaceholder.typicode.com/posts/${id}`;

  return fetch(url).then(response => response.json());
}
export default fetchSinglePost;
