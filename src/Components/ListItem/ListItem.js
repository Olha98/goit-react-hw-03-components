import React from 'react';
import style from './ListItem.module.css'

const ListItem = (avatar, name, isOnline, id) => {

  return (
      <>
         <li className="item">
       <span className="status">{isOnline}</span>
        <img className="avatar" src={avatar} alt={name} width="48" />
         <p className="name">{name}</p>
         </li>
      </>
  );
}

export default ListItem;