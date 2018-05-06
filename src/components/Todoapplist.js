import React from 'react';

export default class Todoapplist extends React.Component {
    render() {
        var items=this.props.tasks.map((elem,i)=>{
          return  <li key={i}>{elem}</li>
        });

        return (
            <ul>
                {items}
            </ul>
        );
    }

}


