import React, { Component } from 'react';
import moment from 'moment';
import './NewsCard.css';
class NewsCard extends Component {
  render() {
    return (
      <article className='newsCard animated fadeInDown'>
        <header className='header'>
          <p className='sectionName'>{this.props.news.sectionName}</p>
          <h1 className='title'>
            {this.props.news.webTitle}
          </h1>
        </header>
        <footer className='footer'>
          <span className='date'> {moment(this.props.news.webPublicationDate).format('DD/MM/YYYY h:mm:ss')}</span>
          <a className='link' href={this.props.news.webUrl}  rel="noopener noreferrer" target="_blank">see the news</a>
        </footer>
      </article>
    );
  }
}

export default NewsCard;

