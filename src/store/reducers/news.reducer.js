import {UPDATE_NEWS, SHOW_ERROR} from '../actions/news.action';

export default function NewsReducer(state = {}, {type, payload}) {
  switch(type) {
    case UPDATE_NEWS: 
      return payload.news;
    case SHOW_ERROR:
      return payload.news;
    default:
      return state
  }
}