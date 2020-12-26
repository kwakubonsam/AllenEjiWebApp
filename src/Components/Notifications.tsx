import React from "react";

export const Notify = () => {
  return (
    <div
      className="card w-50 bg-dark text-white"
      style={{
        marginTop: "-100em",
        position: "relative",
        float: "right",
      }}
    >
      <div className="card-body" style={{ width: "50em" }}>
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
        <a href="/yes" className="btn btn-primary">
          Button
        </a>
      </div>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
        <a href="/yes" className="btn btn-primary">
          Button
        </a>
      </div>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
        <a href="/yes" className="btn btn-primary">
          Button
        </a>
      </div>
    </div>
  );
};
