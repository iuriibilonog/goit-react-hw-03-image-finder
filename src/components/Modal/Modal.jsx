import React, { Component } from 'react';
import s from './Modal.module.css';
import PropTypes from 'prop-types';

class Modal extends Component {

  static propTypes = {
    largePic: PropTypes.string.isRequired,
    toggleModal: PropTypes.func.isRequired
  }


  componentDidMount() {
  window.addEventListener('keydown', this.closeByEsc)
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeByEsc)
  }

  

  closeByEsc = (e) => {
    if (e.code === 'Escape') this.props.toggleModal();
  }

  closeByClickOnOverlay = (e) => {
    if (e.target === e.currentTarget) this.props.toggleModal();  
  }

  


  render() {
    
  return (
    <div className={s.overlay} onClick={this.closeByClickOnOverlay}>
      <div className={s.modal}>

        <img src={this.props.largePic} alt={this.props.largePic} />
       
  </div>
</div>
  )
  }
  
}

export default Modal;