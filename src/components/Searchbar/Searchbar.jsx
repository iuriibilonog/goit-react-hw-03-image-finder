import React, { Component } from "react";
import s from './Searchbar.module.css';
import PropTypes from 'prop-types';


class Searchbar extends Component {

  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  }

  state = {
    inputValue: ''
  }

  handleOnChange = (e) => {
    this.setState({ inputValue: e.target.value })
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.inputValue)
  }
    

  render() {
    return (
      <header className={s.searchbar}>
        <form className={s.searchForm} onSubmit={this.handleOnSubmit}>
          <button type="submit" className={s.searchFormButton}>
      <span className={s.buttonLabel}>Search</span>
    </button>

    <input
            className={s.searchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.inputValue}
            onChange={this.handleOnChange}
    />
  </form>
    </header>
  )
   }

  
}
export default Searchbar;