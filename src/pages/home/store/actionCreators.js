import axios from 'axios';
import * as constants from './constants';

const changeHomeData = (res) => ({
  type: constants.CHANGE_HOME_DATA,
  topicList: res.topicList,
  articleList: res.articleList,
  recommendList: res.recommendList
})

export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/homeList.json').then((res) => {
      const result = res.data.data;
      dispatch(changeHomeData(result))
    })
  }
}
