import React from "react";

export default class MainForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    };
    this.onTitleEventHandler = this.onTitleEventHandler.bind(this);
    this.onBodyEventHandler = this.onBodyEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleEventHandler(e) {
    this.setState(() => {
      return {
        title: e.target.value,
      };
    });
  }

  onBodyEventHandler(e) {
    this.setState(() => {
      return {
        body: e.target.value,
      };
    });
  }

  onSubmitEventHandler(e) {
    this.setState(() => {
      e.preventDefault();
    });
  }

  render() {
    return (
      <>
        <form action="" className="form-input">
          <h2 className="form-input__title">Buat Catatan</h2>
          <p>Sisa Karakter</p>
          <input
            type="text"
            className="form-input__wrapper"
            name="title"
            id="title"
            value={this.state.title}
            onChange={this.onTitleEventHandler}
            placeholder="Judul Catatan"
          />
          <textarea
            className="form-input__wrapper"
            name="body"
            id="body"
            value={this.state.body}
            onChange={this.onBodyEventHandler}
            placeholder="Deskripsi Catatan"
          />
          <button
            type="submit"
            className="form-input__wrapper form-input__button"
          >
            Buat
          </button>
        </form>
      </>
    );
  }
}
