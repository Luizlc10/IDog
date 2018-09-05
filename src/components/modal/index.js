import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './modal.css';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      src: `https://dog.ceo/api/img/${this.props.vars.category}/${this.props.vars.id}.jpg`
    }
  }

  closeModal = () => {
    this.props.history.push(`/feed?category=${this.props.vars.category}`);
  }

  render() {
    return(
      <div className="Card modal">
        <div onClick={this.closeModal} className="modal-content">
          <img
            className="modal-image"
            src={this.state.src}/>
        </div>
      </div>
    )
  }
}

export default withRouter(Modal);
