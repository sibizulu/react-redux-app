export default function listing (state = [], action) {
  switch (action.type) {
    case 'ADD_LIST':
      return [
        ...state,
        action
      ]
    default:
      return state
  }
}
