import React,{Component} from 'react';
import './List.module.css';
import ListItem from '../ListItem/ListItem'
import PropTypes from 'prop-types';


class FriendList extends Component {
  static propTypes = {
    friends: PropTypes.array
  };


  render() {
    const friends = this.props.friends;
   
      return (
          <>
              <ul>
                 {friends.map(friend=> <ListItem key={friend.id} {...friend}/>)}
              </ul>
          </>
      );
  }
}



export default FriendList;