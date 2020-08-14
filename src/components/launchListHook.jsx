import React, { useState, useEffect } from 'react';

function LaunchListHooks() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [launchData, setLaunchData] = useState([]);
  
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
      fetch("https://api.spacexdata.com/v2/launches")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setLaunchData(result);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
  
    
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          { launchData.map((launchData) => (
            <div key={launchData.flight_number.toString()}>
              {JSON.stringify(launchData)}
            </div>
          ))}  
        </div>
      );
    }
  }

  export default LaunchListHooks;