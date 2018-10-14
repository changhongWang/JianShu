import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState =fromJS({
  title: '利用Python写了一个翻译工具！然后就成为了学弟眼中的大神了！',
  content: '<p><b>1. 爬虫前的分析</b></p><p>因为要实现有道翻译的翻译功能，就需要找到它的接口，打开<b>审查元素</b>，来到<b>网络监听窗口(Network)</b>，查看API接口。</p><img src="https://upload-images.jianshu.io/upload_images/12649257-9074f89745214e0f?imageMogr2/auto-orient/strip%7CimageView2/2/w/640/format/webp" alt="示例"/>'
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_DETAIL:
      return state.merge({
        title: action.title,
        content: action.content
      });
    default:
      return state;
  }
}
