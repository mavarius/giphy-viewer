export default function oneGifReducer (state = [], action) {
  if (action.error) {
    return state
  }
  switch (action.type) {
    case 'RECEIVE_ONE_FULFILLED':
      return action.payload.data
      break
    default:
      return state
  }

}
