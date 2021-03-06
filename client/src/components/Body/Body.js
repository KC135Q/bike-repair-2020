import React from "react";
import "./Body.css";

const Body = props => (
    <div className="row">
      <div className="col-lg-2"></div>
      <div className="col-lg-10">
        <div className="card">
          <div className="card-header">
            Featured
        </div>
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
          </div>
        </div>
      </div>
    </div>
);

export default Body;