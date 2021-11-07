import React, { Component } from 'react';
import s from './Modal.module.css';

class Modal extends Component {


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
    console.log(this.props.largePic)
    
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