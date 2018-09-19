import React from 'react';
import { connect } from 'react-redux';
import { HeaderWrapper, Logo, SearchWrapper, Nav, NavItem, NavSearch,
  SearchInfo, SearchInfoTitle, SearchInfoSwitch, SearchInfoItem, SearchInfoList,
  Addition, Button } from './style';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';

const getListArea = (show) => {
  console.log(show)
  if (show) {
    return (
      <SearchInfo>
        <SearchInfoTitle>热门搜索
          <SearchInfoSwitch>换一批</SearchInfoSwitch>
        </SearchInfoTitle>
        <SearchInfoList>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
        </SearchInfoList>
      </SearchInfo>
    )
  } else {
    return null;
  }
}

const Header = (props) => {
  return (
    <HeaderWrapper>
      <Logo href="/"/>
      <Nav>
        <NavItem className='left active'>首页</NavItem>
        <NavItem className='left'>下载App</NavItem>
        <SearchWrapper>
          <CSSTransition
            timeout={200}
            in={props.focused}
            classNames="slide"
          >
            <NavSearch
              className={props.focused ? 'focused' : ''}
              onFocus={props.handleSearchFocus}
              onBlur={props.handleSearchBlur}
            ></NavSearch>
          </CSSTransition>
          {getListArea(props.focused)}
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

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['focused', 'header'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSearchFocus () {
      dispatch(actionCreators.searchFocus());
    },
    handleSearchBlur () {
      dispatch(actionCreators.searchBlur());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
