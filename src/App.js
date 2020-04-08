import React from 'react';
import { render } from 'react-dom';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        { id: 1, name: 'Cory' },
        { id: 2, name: 'Meg' },
        { id: 3, name: 'Bob' }
      ],
    };
  }


  showValue() {
    console.log(this.state);
  }


  render() {
    return (
      <div>
        <button onClick={this.showValue.bind(this)}>Show value</button>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
