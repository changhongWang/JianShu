import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { RecommendItem } from "../style";

class Recommend extends PureComponent {
  render () {
    return (
      this.props.list.map((item) => {
        return (
          <RecommendItem key={item.get('id')}>
            <a className='pic-wrapper' href={item.get('jumpUrl')}>
              <img className='recommend-pic' src={item.get('imgUrl')} alt=''/>
            </a>
          </RecommendItem>
        )
      })
    )
  }
}

const mapStateToProps = (state) => ({
  list: state.getIn(['home', 'recommendList'])
});

export default connect(mapStateToProps, null)(Recommend);
