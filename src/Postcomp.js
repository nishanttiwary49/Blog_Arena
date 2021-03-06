import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './Postaction';
import EditComponent from './Componentmodify';
class Postcomp extends Component {
render() {
return (
<div>
  <h1 className="post_heading">Post Blogs</h1>
  {this.props.posts.map((post) => (
  <div key={post.id}>
    {post.editing ? <EditComponent post={post} key={post.id} /> : <Post post={post}
    key={post.id} />}
  </div>
))}
</div>
);
}
}
const mapStateToProps = (state) => {
return {
posts: state
}
}
export default connect(mapStateToProps)(Postcomp);