import React from 'react';
import CowDescription from './cowDescription.js'

class CowListItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = ({
      toggle: false
    })

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({
      toggle: true
    });
  }


// <li>name: {props.cow.name} description: {props.cow.description}</li>
render() {
  return (
    <div>
      <img onClick={this.handleClick} src={this.props.cow.pictureUrl} />
      {this.state.toggle === true ? <CowDescription cow={this.props.cow}/> : null}
    </div>
    )
  }
}

export default CowListItem;