export default function gifReducer (state = [], action) {
  if (action.error) {
    return state
  }
  switch (action.type) {
    case 'SEARCH_ACTION_FULFILLED':
      return action.payload
      break
    default:
      return state
  }

}
