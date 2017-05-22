import React from 'react'

const List = ({title, listing, button, onClickAddToFav}) => (
  <div>
    <h3>{title}</h3>
    <ul>
      {listing.map((listItem, index) =>
        <li key={index}>{listItem.text} <button onClick={() => onClickAddToFav(listItem.text, index)}>{button}</button></li>
    )}
    </ul>
  </div>
)

export default List
