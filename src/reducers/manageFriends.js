export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      return {...state, friends.push(action.friend)}
    case 'REMOVE_FRIEND':
      return {...state, friends.filter(i => i.id !== action.friend.id)}
    default:
      return state;
  }
}
