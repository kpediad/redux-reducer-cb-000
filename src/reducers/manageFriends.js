export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      return {count: state.count + 1}
    case 'DECREASE_COUNT':
      return {count: state.count - 1}
    default:
      return state;
  }
}
