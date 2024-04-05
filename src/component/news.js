import React, { Component } from "react";
import Newsitem from "./newsitem";

export class news extends Component {
  articles = [];
  constructor() {
    super();
    this.state = {
      articles: [],
    };
  }
  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apikey=dbe57b028aeb41e285a226a94865f7a7";
    let data = await fetch(url);
    let parsedata = await data.json();
    this.setState({ articles: parsedata.articles });
  }
  render() {
    return (
      <div className="container my-3">
        <h1>Todays-Top Heading</h1>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url ? element.url : ""}>
                <Newsitem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={
                    element.description ? element.description.slice(0, 80) : ""
                  }
                  imgurl={
                    element.urlToImage
                      ? element.urlToImage
                      : "https://static.toiimg.com/photo/107829279.cms"
                  }
                  newsurl={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default news;
