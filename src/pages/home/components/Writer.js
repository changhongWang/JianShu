import React, { PureComponent } from 'react';
import { WriterWrapper } from '../style';

class Writer extends PureComponent {
  render () {
    return (
      <WriterWrapper>Writer</WriterWrapper>
    )
  }
}

export default Writer;

// 剩余： 正确的页面跳转方式
// 错误的： 用 a 标签，每次都重新加载html 文件
