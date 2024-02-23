/* eslint-disable no-unused-vars */
import React from 'react'
import FriendListItem from "../FriendListItem/FriendListItem"
import css from "./FriendList.module.css"

const FriendList = ({friends}) => {
  return (
    <ul className={css.friendsList}>
        {friends.map((friend) => {
            return (
                <li className={css.friendContainer} key={friend.id}>
                <FriendListItem 
                avatar={friend.avatar} 
                name={friend.name} 
                isOnline={friend.isOnline} />
                </li>
            )
        })}
    </ul>
  )
}

export default FriendList