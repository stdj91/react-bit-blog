import React from "react";
import { Link } from "react-router-dom";

const Authors = () => {
  return (
    <div class="container">
      <div>
        <Link to="/post/1">
          <h2>Name Surname (2 - posts) </h2>
        </Link>
        <hr />
      </div>
      <div>
        <Link>
          <h2>Name Surname (2 - posts) </h2>
        </Link>
        <hr />
      </div>
      <div>
        <Link>
          <h2>Name Surname (2 - posts) </h2>
        </Link>
        <hr />
      </div>
      <div>
        <Link>
          <h2>Name Surname (2 - posts) </h2>
        </Link>
        <hr />
      </div>
      <div>
        <Link>
          {" "}
          <h2>Name Surname (2 - posts) </h2>
        </Link>
        <hr />
      </div>
    </div>
  );
};

export default Authors;
