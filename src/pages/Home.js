import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNewsByPage, getNews } from '../store/actions/news.action';
import NewsCard from '../components/NewsCard/NewsCard';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { news: [] };
    this.updateNews = this.updateNews.bind(this);
  }
  componentDidMount() {
    this.props.getNews();
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.news !== this.props.news)
      this.setState((state, props) => {
        return { news: state.news.concat(this.props.news.results), newsSectionName: state.newsSectionName, newsType: state.newsType };
      });
  }
  updateNews(event, currentPage) {
    if (event.offsetHeight + event.scrollTop === event.scrollHeight)
      this.props.getNewsByPage(currentPage)
  }
  render() {
    return (
      <article className='news' onScroll={(event) => this.updateNews(event.target, this.props.news.currentPage)}>
        <h1>The guardians news</h1>
        {
          this.state.news.length > 0
            ? this.state.news.map((item, index) => <NewsCard key={index} news={item} />)
            : <p>results not found</p>
        }
      </article>
    );
  }
}
const mapStateToProps = state => ({
  news: state.news
});
const mapActionsToProps = {
  getNewsByPage: getNewsByPage,
  getNews: getNews
};
export default connect(mapStateToProps, mapActionsToProps)(Home);

