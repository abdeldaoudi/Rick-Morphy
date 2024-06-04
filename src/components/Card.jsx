import React from "react";

export const Card = ({ characters = [] }) => {
  return (
    <div className="row">
      {characters.map((item, index) => (
        <div key={index} className="col mb-4">
          <div className="card p-3">
            <img src={item.image} alt="" style={{ minWidth: "200px" }} />
            <div className="card-body">
              <div className="card-title">{item.name}</div>
              <hr />
              <p classname="card-text">Gender: {item.gender}</p>
              <hr />
              <p classname="card-text">Location: {item.location.name}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
