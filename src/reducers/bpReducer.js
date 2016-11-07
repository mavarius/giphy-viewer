export default function (state = 'default', action) {
  switch (action.type) {
    case 'CHANGE_DEFAULT':
      return 'newState'
    default:
      return state
  }
}
