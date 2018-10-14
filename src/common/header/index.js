import React, {Component} from 'react';
import { connect } from 'react-redux';
import { HeaderWrapper, Logo, SearchWrapper, Nav, NavItem, NavSearch,
  SearchInfo, SearchInfoTitle, SearchInfoSwitch, SearchInfoItem, SearchInfoList,
  Addition, Button } from './style';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import { actionCreators as loginActionCreators } from '../../pages/login/store';
import { Link } from 'react-router-dom';

class Header extends Component{

  getListArea () {
    const {focused, mouseIn, list, page, totalPage, handleMouseEnter, handleMouseLeave, handleChangePage} = this.props;
    const newList = list.toJS();
    const pageList = [];

    if (newList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        pageList.push(
          <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
        )
      }
    }

    if (focused || mouseIn) {
      return (
        <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <SearchInfoTitle>热门搜索
            <SearchInfoSwitch onClick={() => {handleChangePage(page, totalPage)}}>换一批</SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {pageList}
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null;
    }
  }

  render () {
    const {focused, login, handleSearchFocus, handleSearchBlur, logOut} = this.props;
    return (
      <HeaderWrapper>
        <Link to='/'>
          <Logo/>
        </Link>
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载App</NavItem>
          <SearchWrapper>
            <CSSTransition
              timeout={200}
              in={focused}
              classNames="slide"
            >
              <NavSearch
                className={focused ? 'focused' : ''}
                onFocus={handleSearchFocus}
                onBlur={handleSearchBlur}
              ></NavSearch>
            </CSSTransition>
            {this.getListArea()}
          </SearchWrapper>
          {
            login ?
              <NavItem className='right' onClick={logOut}>退出</NavItem>:
              <Link to='/login'><NavItem className='right'>登录</NavItem></Link>
          }
          <NavItem className='right'>Aa</NavItem>
          <Addition>
            <Button className='writing'>写文章</Button>
            <Button className='reg'>注册</Button>
          </Addition>
        </Nav>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    login: state.getIn(['login', 'login'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSearchFocus () {
      dispatch(actionCreators.getList());
      dispatch(actionCreators.searchFocus());
    },
    handleSearchBlur () {
      dispatch(actionCreators.searchBlur());
    },
    handleMouseEnter () {
      dispatch(actionCreators.mouseEnter());
    },
    handleMouseLeave () {
      dispatch(actionCreators.mouseLeave());
    },
    handleChangePage (page, totalPage) {
      const action = page < totalPage ? actionCreators.changePage(page+1) : actionCreators.changePage(1);
      dispatch(action);
    },
    logOut () {
      dispatch(loginActionCreators.logOut());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
