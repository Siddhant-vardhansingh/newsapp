import React, { Component } from "react";

export default class NewsItems extends Component {
  render() {
    let { imageURL, title, description, newsURL } = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={
              !imageURL
                ? "https://media.istockphoto.com/id/1182477852/photo/breaking-news-world-news-with-map-backgorund.jpg?s=612x612&w=0&k=20&c=SQfmzF39HZJ_AqFGosVGKT9iGOdtS7ddhfj0EUl0Tkc="
                : imageURL
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{!description? "No description available":description}</p>
            <a
              href={newsURL}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-primary"
            >
              Read More ...
            </a>
          </div>
        </div>
      </div>
    );
  }
}
