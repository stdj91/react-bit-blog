import { POSTS_URL, USERS_URL } from "../shared/Constants";

class FetchService {
  fetchPosts() {
    return fetch("https://jsonplaceholder.typicode.com/posts").then(response =>
      response.json()
    );
  }

  fetchUsers() {
    return fetch("https://jsonplaceholder.typicode.com/users").then(response =>
      response.json()
    );
  }
}

export default FetchService;
