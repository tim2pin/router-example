import React,{Component} from 'react';


export default class NoMatch extends Component {
  render() {
    return (
      <div>
        <h4>No Corn!!!</h4>
        <img src="http://cdn.modernfarmer.com/wp-content/uploads/2016/05/corn-yields.jpg" alt="corned!" />
        <div>this page doesnt exsist... maybe....<a href="/">start over</a>.</div>
      </div>
    );
  }
}