
  import React, {Component} from 'react';
  import ReactDOM from 'react-dom';
  import { Router, Route, Link, browserHistory } from 'react-router';
  import Welcome from './Welcome.jsx'
  import UserList from './UserList.jsx';
  import NoMatch from './NoMatch.jsx';

  /**
   * A stateful component to store our app
   */
  class App extends Component {
    render() {
      return (
        <div>
          <ul>
            <li><Link to={`/users`}>User List</Link></li>
          </ul>
            {this.props.children}
        </div>
      );
    }
  }

  ReactDOM.render(
    <Router history={browserHistory}>

      <Route path="/" component={App}>
        <Route path="/" component={Welcome} />
        <Route path="users" component={UserList} />
      </Route>
    
      <Route path="*" component={NoMatch} />
    </Router>,
    document.getElementById('root')
  );
