import React, { Component } from 'react';
import moment from 'moment';
import './NewsCard';
class NewsCard extends Component {
  render() {
    return (
      <article className='newsCard'>
        <p className='sectionName'>{this.props.news.sectionName}</p>
        <h1 className='title'>
          {this.props.news.webTitle}
        </h1>
        <span className='date'> {moment(this.props.news.webPublicationDate).format('DD/MM/YYYY h:mm:ss')}</span>
        <a className='link' href={this.props.news.webUrl}  rel="noopener noreferrer" target="_blank">Ver notícia</a>
      </article>
    );
  }
}

export default NewsCard;

