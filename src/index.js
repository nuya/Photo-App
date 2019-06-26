import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import { getPhotos } from "./photoService";
import { getUser } from "./userService";

import { Card } from "./Card";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      urls: null,
      user: null
    };
  }

  async componentDidMount() {
    try {
      const user = await getUser();
      const urls = await getPhotos(0);

      this.setState({
        user,
        urls
      });
    } catch (e) {
      // error
    }
  }

  render() {
    const { urls, user } = this.state;

    return (
      <div className="app">
        <h1>Photo App</h1>

        <Card urls={urls} user={user} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
