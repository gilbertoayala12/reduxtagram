import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

const Single = React.createClass({
  // index of the post
  // get us the post itself
  render() {
    const { postId } = this.props.params;
    const i = this.props.post.findIndex((post) => post.code === postId);
    const post = this.props.post[i];
    const postComments = this.props.comments[postId] || [];

    return (
      <div className="single-photo">
        <Photo {...this.props} i={i} post={post} />
        <Comments postComments={postComments} />
      </div>
    );
  }
});
export default Single;
