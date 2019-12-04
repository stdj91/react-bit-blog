import React from "react";
import { Link } from "react-router-dom";
import fetchSinglePost from "../../services/fetchSinglePost";
import AuthorLink from "./AuthorLink";
import fetchSingleUser from "../../services/fetchSingleUser";

class SinglePostPage extends React.Component {
  constructor(props) {
    super(props);

    this.id = this.props.match.params.id;

    this.state = {
      loading: true,
      post: null
    };
  }

  getPost() {
    fetchSinglePost(this.id).then(post => {
      this.setState({ post, loading: false });
    });
  }

  componentDidMount() {
    this.getPost();
  }

  render() {
    if (this.state.loading) {
      return <div>Page is loading</div>;
    }

    return (
      <div className="container1">
        <h2 class="center">{this.state.post.title}</h2>

        <AuthorLink author={this.state.post.userId} />
        <br />
        <br />
        <p>{this.state.post.body}</p>

        <br />
        <br />
        <br />
        <hr />
        <h3>3 more posts from same author</h3>
        <br />
        <Link>
          <h3>Title 10 - velit ...</h3>
        </Link>
        <Link>
          <h3>Title 11 - velit ...</h3>
        </Link>
        <Link>
          <h3>Title 12 - velit ...</h3>
        </Link>
      </div>
    );
  }
}

export default SinglePostPage;
