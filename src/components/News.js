import React, { Component } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
export default class News extends Component {
  static defaultProps = {
    country: "in",
    pagesize: 9,
    category: 'general'
  }

  static propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string
  }
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
      `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=82612c0dbcd5418382c8e331bf511176&page=1&pageSize=${this.props.pagesize}`;
    this.setState({loading: true})
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    });
  }

  handlePrevPage = async () => {
    let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=82612c0dbcd5418382c8e331bf511176&page=${
      this.state.page - 1
    }&pageSize=${this.props.pagesize}`;
    this.setState({loading: true})
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({loading: false})
    this.setState({ page: this.state.page - 1, articles: parsedData.articles });
  };

  handleNextPage = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pagesize)) {
        alert("You are up-to-date")
    } else {
      let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}country=${this.props.country}&apiKey=82612c0dbcd5418382c8e331bf511176&page=${
        this.state.page + 1
      }&pageSize=${this.props.pagesize}`;
      this.setState({loading: true})
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({loading: false})
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
      });
    }
  };

  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center">News App - Top Headlines</h2>
        {this.state.loading && <Spinner/>}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
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

        <div className="container d-flex justify-content-between my-3">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevPage}
          >
            &#8592; Previous
          </button>
          <button
          disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pagesize)}
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextPage}
          >
            Next &#8594;
          </button>
        </div>
      </div>
    );
  }
}
