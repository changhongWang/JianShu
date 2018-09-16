import React from 'react';
import { connect } from 'react-redux';
import { HeaderWrapper, Logo, SearchWrapper, Nav, NavItem, NavSearch, Addition, Button } from './style';
import { CSSTransition } from 'react-transition-group';

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
    focused: state.header.focused
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSearchFocus () {
      const action = {
        type: 'search_focus'
      };
      dispatch(action);
    },
    handleSearchBlur () {
      const action = {
        type: 'search_blur'
      };
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
