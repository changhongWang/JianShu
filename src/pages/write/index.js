import React, {PureComponent} from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class Writer extends PureComponent {

  render () {
    const { loginStatus } = this.props;
    if(loginStatus) {
      // 如果已登录跳转写文章页面，否则跳登录页
      return (
        <div>写文章</div>
      )
    }else {
      return <Redirect to='/login' />
    }
  }

}

const mapStateToProps = (state) => ({
  loginStatus: state.getIn(['login', 'login'])
})

export default connect(mapStateToProps, null)(Writer);
