import React, { Component } from 'react';
import PostForm from './PostForm';
import AllPost from './Postcomp';


class App extends Component {
render() {
return (
<div className="App">
  <div className="navbar">
    <h2 className="center ">Blog Arena</h2>
    </div>
    <PostForm />
    <AllPost />
</div>
);
}
}
export default App;