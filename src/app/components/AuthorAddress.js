import React from "react";

export const AuthorAddress = props => {
  return (
    <div className="row">
      <div className="col s6">
        <h2>Address</h2>
        <h5>Street: {props.author.street} </h5>
        <h5>City: {props.author.city}</h5>
        <h5>Zipcode: {props.author.zipcode}</h5>
      </div>
      <div className="col s6">
        <iframe
          width="100%"
          height="100%"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          title={""}
          frameBorder="0"
          style={{ border: 0 }}
          src={`https://maps.google.com/maps?q=${props.author.latitude},${props.author.longitude}&z=15&output=embed`}
        />
      </div>
    </div>
  );
};
