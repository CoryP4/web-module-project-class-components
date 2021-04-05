import React from 'react';
import ReactDOM from 'react-dom'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}


// more inital changes to ensure commits are working

//more lines here

const rootElement = document.getElementById('root');

ReactDOM.render(<App />, rootElement);
