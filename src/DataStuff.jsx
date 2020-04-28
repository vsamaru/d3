import React from "react";
import * as d3 from "d3";

class DataStuff extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gdpData: []
    };
  }

  componentDidMount() {
    d3.json(
      "https://vsamaru.firebaseio.com/.json",
      data => {
        console.debug("Data:", data);
        var dataSet = data;
        console.log(dataSet);
      }
    ).then(data => {
      this.setState({
        gdpData: data
      });
    });
  }

  render() {
    return <p>Data: {JSON.stringify(this.state.gdpData)}</p>;
  }
}

export default DataStuff;
