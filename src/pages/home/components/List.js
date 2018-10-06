import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ListItem, ListInfo} from '../style';

class List extends Component {
  render() {
    return (
      this.props.list.map((item) => {
        return (
          <ListItem key={item.get('id')}>
            <img className='pic'
                 src={item.get('imgUrl')}
                 alt={item.get('title')}/>
            <ListInfo>
              <h3 className='title'>{item.get('title')}</h3>
              <p className='desc'>{item.get('desc')}</p>
            </ListInfo>
          </ListItem>
        )
      })
    )
  }
}

const mapStateToProps = (state) => ({
  list: state.get('home').get('articleList')
});

export default connect(mapStateToProps, null)(List);
