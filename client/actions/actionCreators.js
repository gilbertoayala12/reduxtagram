// increment like in post
export function increment(index) {
  return {
    type: 'INCREMENT_LIKES',
    index
  };
}
// add comment
export function addComment(postId, author, comment) {
  console.log('Dispatching add commnet');
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  };
}
// remove comment
export function removeComment(postId, index) {
  return {
    type: 'REMOVE_COMMENT',
    postId,
    index
  };
}
