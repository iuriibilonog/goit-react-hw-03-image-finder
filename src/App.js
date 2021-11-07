import React, { Component } from "react";
import Loading from "./components/Loader";
import s from "./App.module.css";
import Searchbar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery";
import Button from "./components/Button";
import ErrorView from "./components/Error/ErrorView";
import Modal from "./components/Modal";
import { getDataServer } from "./services/api";

class App extends Component {
  state = {
    images: [],
    query: "",
    isLoading: false,
    page: 1,
    error: null,
    status: null,
    modalShow: false,
    largeImageUrl: "",
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      this.getPictures();
    }
  }

  getQueryFromInput = (query) => {
    this.setState({ query, page: 1, images: [] });
  };

  getPictures = () => {
    this.setState({ status: null, isLoading: true });
    getDataServer(this.state.query, this.state.page)
      .then((data) =>
        data.hits.length === 0
          ? this.setState({ status: "error" })
          : this.setState((prevState) => ({
              images: [...prevState.images, ...data.hits],
            }))
      )
      .catch((err) => this.setState({ error: err }))
      .finally(() => this.setState({ isLoading: false }));
  };

  handleChangePage = () => {
    this.setState((prevState) => ({
      page: prevState.page + 1,
    }));
    setTimeout(() => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }, 500);
  };

  toggleModal = () => {
    this.setState({ modalShow: !this.state.modalShow });
  };

  getItemfromClick = (largeImageUrl) => {
    this.setState({ largeImageUrl });
    this.toggleModal();
  };

  render() {
    return (
      <div className={s.app}>
        <Searchbar onSubmit={this.getQueryFromInput} />

        {(this.state.error || this.state.status === "error") && <ErrorView />}

        <ImageGallery
          images={this.state.images}
          onModalshow={this.getItemfromClick}
        />

        {this.state.isLoading && <Loading />}

        {this.state.images.length >= 12 && !this.state.isLoading && (
          <Button onLoadMore={this.handleChangePage} />
        )}

        {this.state.modalShow && (
          <Modal
            largePic={this.state.largeImageUrl}
            toggleModal={this.toggleModal}
          />
        )}
      </div>
    );
  }
}

export default App;
