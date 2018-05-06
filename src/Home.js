import React from 'react';
import TodoAppList from './components/Todoapplist';
import Addnewtask from './components/Addnewtask';

var tasklist=["Task 1","Task 2","Task 211"];
export default class Home extends React.Component {
  render() {

    return (
      <div>
      <h1>Todo App</h1>
      <Addnewtask />
      <TodoAppList tasks={tasklist}/>
      </div>
    );

  }
}
