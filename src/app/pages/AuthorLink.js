import React from "react";
import fetchSingleUser from "../../services/fetchSingleUser";
import { Link } from "react-router-dom";

class AuthorLink extends React.Component {
  constructor(props) {
    super(props);

    this.userId = props.author;

    this.state = {
      author: null
    };
  }

  getUser() {
    fetchSingleUser(this.userId).then(user =>
      this.setState({ author: user, loading: false })
    );
  }
  componentDidMount() {
    this.getUser();
  }

  render() {
    if (!this.state.author) {
      return null;
    }

    return <Link to={`/authors/${this.userId}`}>{this.state.author.name}</Link>;
  }
}

export default AuthorLink;
