export default function favorite (state = [], action) {
  switch (action.type) {
    case 'ADD_LIST_FAV':
      return [
        ...state,
        action
      ]
    case 'REMOVE_LIST_FAV':
      console.log(action)
      return state.filter((element, index) => index !== action.id)
    default:
      return state
  }
}
