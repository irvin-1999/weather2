import { set } from "mongoose";
import React, { useState, useEffect } from "react";

const SeasonDisplay = () => {
  const [state, setState] = useState({ lat: null, errMessage: "" });

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        setState({ lat: position.coords.latitude });
      },
      (err) => {
        setState({ errMessage: err.message });
      }
    );
  }, []);
  return (
    <h1>
      Latitude:
      {state.map(latitude, (i) => {
        return (
          <div key={i}>
            <h1>Latitude: {latitude.latitude}</h1>
          </div>
        );
      })}
    </h1>
  );
};
export default SeasonDisplay;
