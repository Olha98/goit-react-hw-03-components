import React from 'react';
import ReactDOM from 'react-dom';
import friends from './friends.json';
import FriendList from './Components/List/List'

ReactDOM.render(
  <FriendList friends={friends} />,
  document.getElementById('root'),
);
