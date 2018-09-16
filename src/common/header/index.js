import React, { Component } from 'react';
import { HeaderWrapper, Logo, SearchWrapper, Nav, NavItem, NavSearch, Addition, Button } from './style';
import { CSSTransition } from 'react-transition-group';

class Header extends Component {
  constructor(props) {
    super(props);
    this.handleSearchFocus = this.handleSearchFocus.bind(this);
    this.handleSearchBlur = this.handleSearchBlur.bind(this);
    this.state = {
      focused: false
    }
  }

  handleSearchFocus () {
    this.setState({
      focused: true
    })
  }

  handleSearchBlur () {
    this.setState({
      focused: false
    })
  }

  render() {
    return (
      <HeaderWrapper>
        <Logo href="/"/>
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载App</NavItem>
          <SearchWrapper>
            <CSSTransition
              timeout={200}
              in={this.state.focused}
              classNames="slide"
            >
              <NavSearch
                className={this.state.focused ? 'focused' : ''}
                onFocus={this.handleSearchFocus}
                onBlur={this.handleSearchBlur}
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
}

export default Header;
