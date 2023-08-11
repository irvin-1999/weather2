import React, { useState, useEffect } from "react";

const SeasonDisplay = () => {
  const [state, setState] = useState({ lat: null });

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition((position) => {
      setState({ lat: position.coords.latitude });
    });
  }, []);
  return <h1>Latitude:{state} </h1>;
};
export default SeasonDisplay;
