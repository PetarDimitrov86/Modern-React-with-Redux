import React from "react";

const getSeason = (lat, month) => {
  if (month > 2 && month < 0) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.latitute, new Date().getMonth());

  return <div>Season Display</div>;
}

export default SeasonDisplay;