import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

const Single = React.createClass({
  // index of the post
  // get us the post itself
  render() {
    const i = this.props.post.findIndex(
      (post) => post.code === this.props.params.postId
    );
    const post = this.props.post[i];

    return (
      <div className="single-photo">
        <Photo {...this.props} i={i} post={post} />
        <Comments />
      </div>
    );
  }
});
export default Single;
