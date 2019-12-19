// reducer takes two things
/**
 * 1. The action (info about what happened)
 * 2. copy of current state
 */
function postComments(state = [], action) {
  switch (action.type) {
    case 'ADD_COMMENT':
      // return existing state with new comment
      return [
        ...state,
        {
          user: action.author,
          text: action.comment
        }
      ];
    case 'REMOVE_COMMENT':
      // we need to return the new state without the deleted comment
      return [
        // from the start to the one we want to delete
        ...state.slice(0, action.index),
        // after the deleted one, to the end
        ...state.slice(action.index + 1)
      ];

    default:
      return state;
  }
  return state;
}
function comments(state = [], action) {
  if (typeof action.postId !== 'undefined') {
    return {
      // take the current state
      ...state,
      // overwrite this post with a new one, reducer composition
      [action.postId]: postComments(state[action.postId], action) // passing a subpiece of state and state
    };
  }
  return state;
}

export default comments;
