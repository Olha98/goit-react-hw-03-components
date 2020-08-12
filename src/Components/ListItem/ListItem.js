import React from 'react';
import style from './ListItem.module.css'

const ListItem = ({name, avatar, isOnline}) => {
return(
<li className="item">
<span className="status"></span>
<img className="avatar" src={avatar} alt={name} width="48" />
<p className="name">{name}</p>
</li>
)
 
}

export default ListItem;


{/* <>
<li className="item">
<span className="status"></span>
<img className="avatar" src={avatar} alt={name} width="48" />
<p className="name">{name}</p>
</li>
</> */}