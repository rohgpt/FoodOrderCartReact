import React, { Component } from "react";
import Card from "./card";
import "./style.css";
class News extends Component {
  state = {
    news: [],
    flag: false,
  };

  componentDidMount() {
    const url = "";
    const config = {
      header: { accept: "application/json" },
      method: "GET",
    };

    fetch(url, config)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        this.Save(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  Save = (data) => {
    this.setState({
      news: data.articles,
    });
  };
  render() {
    return (
      <div className="biggest-container">
        {/* <button
          onClick={() => {
            this.state.news.map((item) => {
              return (
                <Card
                  img={item.urlToImage}
                  title={item.title}
                  description={item.description}
                />
              );
            });
          }}
        >
          click To show
        </button> */}
        <button onClick={() => this.setState({ flag: !this.state.flag })}>
          Display
        </button>
        {this.state.flag &&
          this.state.news.map((item) => {
            return (
              <Card
                img={item.urlToImage}
                title={item.title}
                description={item.description}
              />
            );
          })}
      </div>
    );
  }
}
export default News;
