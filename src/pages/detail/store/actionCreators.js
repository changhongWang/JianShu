import axios from 'axios';
import * as constants from './constants';
import { fromJS } from 'react-redux';

const changeDetail = (title, content) => ({
  type: constants.CHANGE_DETAIL,
  title,
  content
});

export const getDetail = () => {
  return (dispatch) => {
    axios.get('/api/detail.json').then((res) => {
      if (res.data.err === '200') {
        const { data } = res.data;
        const { title, content } = data;
        dispatch(changeDetail(title, content));
      }
    })
  }
}
