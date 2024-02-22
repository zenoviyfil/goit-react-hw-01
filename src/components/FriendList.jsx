/* eslint-disable no-unused-vars */
import React from 'react'
import FriendListItem from './FriendListItem'
import friends from "../friends.json"
import css from "./FriendList.module.css"

const FriendList = () => {
  return (
    <ul className={css.friendsList}>
        {friends.map((friend) => {
            return (
                <li className={css.friendContainer} key={friend.id}>
                <FriendListItem 
                avatar={friend.avatar} 
                name={friend.name} 
                isOnline={friend.isOnline ? "Online" : "Offline"} />
                </li>
            )
        })}
    </ul>
  )
}

export default FriendList