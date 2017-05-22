export const addListItem = (text) => {
  return {
    type: 'ADD_LIST',
    text
  }
}

export const addListToFavorite = (text) => {
  return {
    type: 'ADD_LIST_FAV',
    text
  }
}

export const addListToFav = (text) => {
  return (dispatch, getState) => {
    const { favorite } = getState()
    if (!favorite.find(fav => fav.text === text)) {
      return dispatch(addListToFavorite(text))
    }
  }
}



export const removeFromFav = (id) => {
  return {
    type: 'REMOVE_LIST_FAV',
    id: id
  }
}
