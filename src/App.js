import React from "react";
import axios from "axios";
import "./App.css";
import { Button } from "reactstrap";

class App extends React.Component {
  state = { quote: "", author: "", showQuote: false, button: "" };

  componentDidMount() {
    this.setState({
      quote: "",
      author: "",
      showQuote: false,
      button: "GET A QUOTE",
    });
  }

  fetchQuotes = (e) => {
    e.preventDefault();
    axios
      .get("https://api.quotable.io/random")
      .then((res) => {
        console.log(res);
        this.setState({ quote: res.data.content, author: res.data.author });
        this.setState({ showQuote: true, button: "NEXT QUOTE" });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="app">
        <div className="card">
          <p
            className="heading"
            style={{ visibility: this.state.showQuote ? "visible" : "hidden" }}
          >
            "{this.state.quote}"
          </p>
          <p
            className="heading"
            style={{ visibility: this.state.showQuote ? "visible" : "hidden" }}
          >
            -{this.state.author}
          </p>
          <Button outline color="secondary" onClick={this.fetchQuotes}>
            {this.state.button}
          </Button>
        </div>
      </div>
    );
  }
}

export default App;
