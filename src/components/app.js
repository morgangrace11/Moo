import React from 'react';
import CowListItem from './cowListItem.js'
// import Cows from './cows.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toggled: false,
      cows: [],
      name: '',
      picture: '',
      description: ''
    }

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePictureChange = this.handlePictureChange.bind(this);
    this.handleDescChange = this.handleDescChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


componentDidMount() {
  fetch('/cows')
  .then(cow => {
    return cow.json();
  })
  .then(cowJson => {
    this.setState({
      cows: cowJson
    });
  });
}

handleNameChange(e) {
  this.setState({
    name: e.target.value
  });
}

handlePictureChange(e) {
  this.setState({
    picture: e.target.value
  });
}

handleDescChange(e) {
  this.setState({
    description: e.target.value
  });
}

handleSubmit(e) {
  var data = {
    name: this.state.name,
    pictureUrl: this.state.picture,
    description: this.state.description
  }

  fetch('/cows', {
    method: 'POST',
    mode: 'cors',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json());
}

  render() {
    return (
      <div>
        <div>COWS</div>
        <form >
          <label>
            Cow name: <input onChange={this.handleNameChange}type="text" name="Cname"/>
            <br />
            Cow picture: <input onChange={this.handlePictureChange}type="text" name="pname"/>
            <br/>
             Cow description: <input onChange={this.handleDescChange} type="text" name="pname"/>
          </label>
          <br/>
          <input type="submit" value="submit" onClick={this.handleSubmit}/>
        </form>
        {this.state.cows.map((cow, index) => {
          return <CowListItem key={index} cow={cow} />
        })}
      </div>
    );
  }
}

export default App;