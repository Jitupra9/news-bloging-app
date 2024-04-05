import React, { Component } from "react";

export class newsitem extends Component {
  render() {
    let { title, description, imgurl, newsurl } = this.props;

    return (
      <div>
        <div className="card my-3 mx-5" style={{ width: "18rem" }}>
          <img src={imgurl} className="card-img-top" alt="not found" />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={newsurl} target="_blank" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default newsitem;
