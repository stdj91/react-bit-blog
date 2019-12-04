import React from "react";
import { AuthorAddress } from "../components/AuthorAddress";
import AuthorCompany from "../components/AuthorCompany";
import AuthorInfo from "../components/AuthorInfo";

const dummyAuthor = {
  street: "sdlkfj",
  city: "lsdkfj",
  zipcode: "kajas",
  latitude: 44.787197,
  longitude: 20.457273
};

const props = {
  author: dummyAuthor
};

const SingleAuthor = () => {
  return (
    <div className="container1">
      <AuthorInfo />
      <AuthorAddress author={dummyAuthor} />
      <AuthorCompany />
    </div>
  );
};

export default SingleAuthor;
