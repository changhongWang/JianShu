import React, { Component } from 'react';
import {HomeWrapper, HomeLeft, HomeRight} from './style';
import List from './components/List';
import Recommend from './components/Recommend';
import Topic from './components/Topic';
import Writer from './components/Writer';
import {connect} from 'react-redux';
import {getHomeInfo} from './store/actionCreators';

class Home extends Component {
  render () {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img
            className="banner-img"
            src="//upload.jianshu.io/admin_banners/web_images/4490/b7edd948215a7a8db1fc8e7b3c07171f53803185.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
            alt='img1'
          />
          <Topic/>
          <List/>
        </HomeLeft>
        <HomeRight>
          <Recommend>Recommend!</Recommend>
          <Writer>Writer!</Writer>
        </HomeRight>
      </HomeWrapper>
    )
  }

  componentDidMount () {
    this.props.changeHomeData();
  }
}

const mapDispatchToProps = (dispatch) => ({
  changeHomeData () {
    const action = getHomeInfo();
    dispatch(action);
  }
})

export default connect(null, mapDispatchToProps)(Home);
