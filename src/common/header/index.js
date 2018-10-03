import React, {Component} from 'react';
import { connect } from 'react-redux';
import { HeaderWrapper, Logo, SearchWrapper, Nav, NavItem, NavSearch,
  SearchInfo, SearchInfoTitle, SearchInfoSwitch, SearchInfoItem, SearchInfoList,
  Addition, Button } from './style';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';

class Header extends Component{

  getListArea () {
    const {focused, mouseIn, list, page, handleMouseEnter, handleMouseLeave} = this.props;
    const newList = list.toJS();
    const pageList = [];

    for (let i = (page - 1) * 10; i< page * 10; i++) {
      pageList.push(
        <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
      )
    }

    if (focused || mouseIn) {
      return (
        <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <SearchInfoTitle>热门搜索
            <SearchInfoSwitch>换一批</SearchInfoSwitch>
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
    return (
      <HeaderWrapper>
        <Logo href="/"/>
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载App</NavItem>
          <SearchWrapper>
            <CSSTransition
              timeout={200}
              in={this.props.focused}
              classNames="slide"
            >
              <NavSearch
                className={this.props.focused ? 'focused' : ''}
                onFocus={this.props.handleSearchFocus}
                onBlur={this.props.handleSearchBlur}
              ></NavSearch>
            </CSSTransition>
            {this.getListArea()}
          </SearchWrapper>
          <NavItem className='right'>登录</NavItem>
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
    page: state.getIn(['header', 'page'])
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
