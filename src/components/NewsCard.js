import React, { Component } from 'react';

class NewsCard extends Component {
  render() {
    console.log('newsCard', this.props)
    return (
      <article>
        <p>{this.props.news.sectionName}</p>
        <h1>
          {this.props.news.webTitle}
        </h1>
        <span> {this.props.news.webPublicationDate}</span>
        <a href={this.props.news.webUrl}  rel="noopener noreferrer" target="_blank">Ver notícia</a>
      </article>
    );
  }
}

export default NewsCard;

