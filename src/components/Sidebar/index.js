import React, { Component } from 'react';
import List  from './list';
class Sidebar extends Component{

  constructor(props) {
    super(props);
    this.state = {
        color: 'bg-red-500'
    }
  }

  render () {
    return (
      <aside className="bg-blue-300 w-1/3">
        <h1>List</h1>
        <List 
          actionName="elemento 1"
          listColor="bg-yellow-300"
        />
      </aside>
    )
  }
}

export default Sidebar;
