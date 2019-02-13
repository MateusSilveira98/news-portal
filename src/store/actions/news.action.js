import axios from 'axios';
export const  UPDATE_NEWS = 'news:updateNews';
export const  SHOW_ERROR = 'news:showError';

export function updateNews(news) {
  return {
    type: UPDATE_NEWS,
    payload: {
      news
    }
  }
}
export function showError() {
  return {
    type: SHOW_ERROR,
    payload: {error: 'Algo de errado não está certo!'}
  }
}
export function getNews() {
  return dispatch => {
    axios.get('https://content.guardianapis.com/search?api-key=0d160d0f-71cd-48b0-801f-2fc9cabd2157')
      .then(response => {
        dispatch(updateNews(response.data.response));
      })
      .catch(error => {
        dispatch(showError());
      });
  }
}