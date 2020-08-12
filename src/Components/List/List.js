import React,{Component} from 'react';
import style from './List.module.css';
import ListItem from '../ListItem/ListItem'


class FriendList extends Component {
  state = {
 
  }

  render() {
    const friends = this.props.friends;
    console.log(friends)
      return (
          <>
              <ul>
                 {friends.map(friend => <ListItem  key={friend.id} {...friend}/>)}
              </ul>
          </>
      );
  }
}

export default FriendList;