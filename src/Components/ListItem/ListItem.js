import React from 'react';
import style from './ListItem.module.css'
import PropTypes from 'prop-types';

const ListItem = ({name, avatar, isOnline}) => {

return(
<li className={style.item}>
<span className={style.status} style={isOnline?{backgroundColor:"green"}: {backgroundColor:"red"}}></span>
<img className={style.avatar} src={avatar} alt={name} width="48" />
<p className={style.name}>{name}</p>
</li>
)

}

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  isOnline: PropTypes.bool.isRequired
};

export default ListItem;


