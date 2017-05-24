import React from 'react'
import styles from '../app.css'

const List = ({title, listing, button, onClickAddToFav}) => (
  <div>
    <h3>{title}</h3>
    <ul className='list'>
      {listing.map((listItem, index) =>
        <li key={index} onClick={() => onClickAddToFav(listItem.text, index)}>{listItem.text}</li>
    )}
    </ul>
  </div>
)

export default List
