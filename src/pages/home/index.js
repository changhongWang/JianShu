import React, { PureComponent } from 'react';
import {HomeWrapper, HomeLeft, HomeRight} from './style';
import List from './components/List';
import Recommend from './components/Recommend';
import Topic from './components/Topic';
import Writer from './components/Writer';
import {connect} from 'react-redux';
import {getHomeInfo} from './store/actionCreators';
import {actionCreators} from './store'
import { BackTop } from './style';

class Home extends PureComponent {
  handleScrollTop () {
    window.scrollTo(0, 0);
  }
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
        {
          this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> : null
        }
      </HomeWrapper>
    )
  }

  componentDidMount () {
    this.props.changeHomeData();
    this.bindEvents();
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.props.changeScrollTopShow);
  }

  bindEvents () {
    window.addEventListener('scroll', this.props.changeScrollTopShow)
  }
}

const mapStateToProps = (state) => ({
  showScroll: state.getIn(['home', 'showScroll'])
})

const mapDispatchToProps = (dispatch) => ({
  changeHomeData () {
    dispatch(getHomeInfo());
  },
  changeScrollTopShow (e) {
    if (document.documentElement.scrollTop > 400) {
      dispatch(actionCreators.toggleTopShow(true));
    } else {
      dispatch(actionCreators.toggleTopShow(false));
    }
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
