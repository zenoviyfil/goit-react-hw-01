/* eslint-disable no-unused-vars */
import React from 'react'
import css from "./FriendListItem.module.css"


const FriendListItem = ({avatar, name, isOnline}) => {
  return (
  <div>
    <img className={css.friendImg} src={avatar} alt="Avatar" width="48" />
    <p className={css.friendName}>{name}</p>
    <p className={isOnline === "Online" ? css.online : css.offline}>{isOnline}</p>
  </div>
  )
}

export default FriendListItem