import React from "react";
import FetchService from "../../services/FetchService";
import PostPage from "../components/PostCard";

const fetchService = new FetchService();

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    fetchService
      .fetchPosts()
      .then(posts => this.setState({ posts, loading: false }));
  }

  render() {
    if (this.state.loading) {
      return <div>Page is loading</div>;
    }
    return this.state.posts.map(post => <PostPage post={post} />);

    /*  <div>
        <h3 className="center">POSTS</h3>
        <div className="container1">
          <Link to="/post/1">
            <h3>Title 1</h3>
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            temporibus error odit nesciunt animi. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Facere temporibus error odit nesciunt
            animi.
          </p>
          <hr />

          <Link to="/post/2">
            <h3>Title 2</h3>
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            temporibus error odit nesciunt animi. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Facere temporibus error odit nesciunt
            animi.
          </p>
          <hr />

          <Link to="/post/3">
            <h3>Title 3</h3>
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            temporibus error odit nesciunt animi. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Facere temporibus error odit nesciunt
            animi.
          </p>
          <hr />

          <Link to="/post/3">
            <h3>Title 4</h3>
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            temporibus error odit nesciunt animi. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Facere temporibus error odit nesciunt
            animi.
          </p>
          <hr />
        </div>
      </div>
    ); */
  }
}

export default Home;
