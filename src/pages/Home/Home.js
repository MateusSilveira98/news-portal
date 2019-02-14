import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNewsByPage, getNews } from '../../store/actions/news.action';
import NewsCard from '../../components/NewsCard/NewsCard';
import './Home.css'
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { news: [], oldNews: [], sectionsName: [], selectedSectionName: null };
    this.updateNews = this.updateNews.bind(this);
    this.filterNews = this.filterNews.bind(this);
  }
  componentDidMount() {
    this.props.getNews();
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.news !== this.props.news)
      this.setState((state, props) => {
        const exist = (array, value) => array.find(item => item === value);
        this.props.news.results.forEach(item => {
          if (!exist(state.sectionsName, item.sectionName)) state.sectionsName.push(item.sectionName);
        });
        return {
          news: state.news.concat(this.props.news.results),
          oldNews: state.oldNews.concat(this.props.news.results),
          sectionsName: state.sectionsName
        };
      });
  }
  updateNews(event, currentPage) {
    if (event.offsetHeight + event.scrollTop === event.scrollHeight)
      this.props.getNewsByPage(currentPage)
  }
  filterNews(value) {
    this.setState((state, props) => {
      return {
        news: value ? state.oldNews.filter(item => item.sectionName === value) : state.oldNews,
        selectedSectionName: value
      }
    });
  }
  render() {
    return (
      <article className='news' onScroll={(event) => this.updateNews(event.target, this.props.news.currentPage)}>
        <header className="main-header">
          <span className='title'>The Guardian News - Top Headlines</span>
        </header>
        <section className='sectionsName'>
          <span className='title'>Sections name filters</span>
          <div className='filters'>
            <div
              className={!this.state.selectedSectionName ? 'filter active' : 'filter'}
              onClick={() => this.filterNews(null)}
            >
              <span> Todos </span>
            </div>
            {
              this.state.sectionsName.map((sectionName, index) =>
                <div
                  key={index}
                  onClick={() => this.filterNews(sectionName)}
                  className={this.state.selectedSectionName === sectionName ? 'filter active' : 'filter'}
                >
                  <span> {sectionName} </span>
                </div>
              )
            }
          </div>
        </section>
        <section className='content'>
          {
            this.state.news.length > 0
              ? this.state.news.map((item, index) => <NewsCard key={index} news={item} />)
              : <p>results not found</p>
          }
        </section>
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

