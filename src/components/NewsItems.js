import React, { Component } from 'react';

export default class NewsItems extends Component {
  render() {
    let { title, description, urlImage, newsUrl, date, source } = this.props;

    return (
      <>
        <div className="my-3">
          <div className="card">
            <img src={urlImage} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">
                {title}
                
              </h5>
              <p className="card-text">{description}</p>
              <p>
                <small className="text-muted">
                  on {new Date(date).toGMTString()}  by {source}
                </small>
              </p>
              <a href={newsUrl} target="blank" className="btn btn-sm btn-dark">
                Read more
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}
