import React, { Component } from "react";

class LaunchList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      flights: [],
    };
  }

  componentDidMount() {
    fetch("https://api.spacexdata.com/v2/launches")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            flights: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, flights } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          { flights.map((flight) => (
            <div>
              {JSON.stringify(flight)}
            </div>
          ))}  
        </div>
      );
    }
  }
}

export default LaunchList;
