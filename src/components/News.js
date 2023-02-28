import React, { Component } from "react";
import NewsItems from "./NewsItems";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=82612c0dbcd5418382c8e331bf511176";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles });
  }
  render() {
    return (
      <div className="container my-3">
        <h2 style={{ alignItems: "center" }}>News App - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItems
                  title={element.title}
                  description={element.description}
                  imageURL={element.urlToImage}
                  newsURL={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container">
          <button type="button" class="btn btn-light">
            Previous
          </button>
          <button type="button" class="btn btn-dark">
            Next
          </button>
        </div>
      </div>
    );
  }
}
