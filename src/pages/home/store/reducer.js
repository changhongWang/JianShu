import { fromJS } from 'immutable';

const defaultState =fromJS({
  topicList: [{
    id: '1',
    title: '手绘',
    imgUrl: 'https://upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
  },
  {
    id: '2',
    title: '读书',
    imgUrl: 'https://upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
  }],
  articleList: [{
    id: '0001',
    title: '利用Python写了一个翻译工具！然后就成为了学弟眼中的大神了！',
    desc: '1.爬虫前的分析 因为要实现有道翻译的翻译功能，就需要找到它的接口，打开审查元素，来到网络监听窗口(Network)，查看API接口。 通过查看...',
    imgUrl: 'https://upload-images.jianshu.io/upload_images/12649257-479b4c2d922e5a8d?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
  },{
    id: '0002',
    title: '马背上的女人一丝不挂，人们只知道表面的低俗，却不知道画背后的意义',
    desc: '导读：马背上的女人一丝不挂，人们只知道表面的低俗，却不知道画背后的意义 不知道大家知不知道关于这样的一幅画，一个没有穿衣服的女性坐在白色的马上，...',
    imgUrl: 'https://upload-images.jianshu.io/upload_images/13466963-066f190031a2095d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
  }]
});

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}
