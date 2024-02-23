/* eslint-disable no-unused-vars */
/* eslint-disable no-irregular-whitespace */
import React from 'react'
import css from'./Profile.module.css'

const Profile = ({
    name, 
    tag, 
    location, 
    image, 
    stats,
}) => {
  return (
    <div className={css.cardContainer}>
      <div className={css.cardMainInfoCont}>
        <img className={css.cardImage}
          src={image}
          alt="User avatar"
        />
        <p className={css.cardUserName}>{name}</p>
        <p className={css.cardUserTag}>@{tag}</p>
        <p className={css.cardUserLoc}>{location}</p>
      </div>

      <ul className={css.cardListContainer}>
        <li className={css.cardListItem}>
          <span>Followers</span>
          <span className={css.cardStatsValues}>{stats.followers}</span>
        </li>
        <li className={css.cardListItem}>
          <span>Views</span>
          <span className={css.cardStatsValues}>{stats.views}</span>
        </li>
        <li className={css.cardListItem}>
          <span>Likes</span>
          <span className={css.cardStatsValues}>{stats.likes}</span>
        </li>
      </ul>
    </div>

  )
}

export default Profile