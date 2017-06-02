export default function listing (state = [], action) {
  switch (action.type) {
    case 'ADD_POST':
      return [
        ...state,
        action.post
      ]
    default:
      return state
  }
}
