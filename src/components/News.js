import React, { Component } from 'react';
import NewsItems from './NewsItems';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

export default class News extends Component {
  static defaultProps = {
    country: 'in',
    category: 'general',
  };

  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
  };

  capitalize = (s) => {
    return s.toLowerCase().charAt(0).toUpperCase() + s.toLowerCase().slice(1);
  };
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      found: 0,
    };
    document.title = `${this.capitalize(this.props.category)} - NewsMonkey`;
  }

  async updateNews() {
    const url = `https://api.thenewsapi.com/v1/news/top?api_token=wdAqexlvSscFDEWE2PnrTWwoIZ3I00biZTtxIiTB&categories=${this.props.category}&locale=${this.props.country}&page=${this.state.page}&limit=5`;
    this.setState({ loading: true });
    const data = await fetch(url);
    const parsedData = await data.json();
    this.setState({
      articles: parsedData.data,
      found: parsedData.found,
      loading: false,
    });
  }

  async componentDidMount() {
    this.updateNews();
  }

  fetchMoreData = async () => {
    this.setState({page : this.state.page + 1})
    const url = `https://api.thenewsapi.com/v1/news/top?api_token=wdAqexlvSscFDEWE2PnrTWwoIZ3I00biZTtxIiTB&categories=${this.props.category}&locale=${this.props.country}&page=${this.state.page}&limit=5`;
    // this.setState({ loading: true });
    const data = await fetch(url);
    const parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.data),
      found: parsedData.found,
    });
  };

  handlePrevClick = async () => {
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };

  handleNextClick = async () => {
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };

  render() {
    return (
      <>
        <div className="container">
          <h1 className="text-center" style={{ margin: '35px 0' }}>
            NewsMonkey - Top {this.capitalize(this.props.category)} Headlines
          </h1>
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.found}
            loader={<Spinner />}
          >
            <div className="row">
              {/* {this.state.loading && <Spinner />} */}
              {this.state.articles.map((element) => {
                return (
                  <div className="col-sm-4 col-12" key={element.uuid}>
                    <NewsItems
                      title={element.title}
                      description={element.description}
                      urlImage={element.image_url}
                      newsUrl={element.url}
                      date={element.published_at}
                      source={element.source}
                    />
                  </div>
                );
              })}
            </div>
          </InfiniteScroll>
        </div>
      </>
    );
  }
}
