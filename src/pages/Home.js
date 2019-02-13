import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { updateNews, getNews } from '../store/actions/news.action';
import NewsCard from '../components/NewsCard';

class Home extends Component {
  componentDidMount() {
    this.props.onGetNews();
  }
  render() {
    return ( 
      <Fragment>
        <h1>The guardians news</h1>
        {
          this.props.news.results.length > 0
            ? this.props.news.results.map(item => <NewsCard key={item.id} news={item}></NewsCard>)
            : <p>results not found</p>
        }
      </Fragment>
    );
  }
}
const mapStateToProps = state => ({
  news: state.news
});
const mapActionsToProps = {
  onUpdateNews: updateNews,
  onGetNews: getNews
};
export default connect(mapStateToProps, mapActionsToProps)(Home);

