import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useState, useEffect } from 'react';


export default function ToggleButtons(props) {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
  }

  useEffect(() => {
      function handleWindowResize() {
      setWindowSize(getWindowSize());
      }
      

      window.addEventListener('resize', handleWindowResize);

      return () => {
      window.removeEventListener('resize', handleWindowResize);
      };
  }, []);

  return (
    <ToggleButtonGroup
      orientation={ windowSize.innerWidth < 900 ? "vertical" : "horizontal" }
      value={props.searchType}
      exclusive
      onChange={props.handleSearchType}
    >
      <ToggleButton
        value="methane"
        style={
          windowSize.innerWidth < 501 ?
          {
            fontSize: "10px",
            fontWeight: "600",
            width: "90%",
            height: "30px"
          } :
          {}
        }
      >
        Methane
      </ToggleButton>
      <ToggleButton 
        value="carbonmonoxide"
        style={
          windowSize.innerWidth < 501 ?
          {
            fontSize: "10px",
            fontWeight: "600",
            width: "90%",
            height: "30px"
          } :
          {}
        }
      >
        Carbonmonoxide
      </ToggleButton>
      <ToggleButton
        value="ozone"
        style={
          windowSize.innerWidth < 501 ?
          {
            fontSize: "10px",
            fontWeight: "600",
            width: "90%",
            height: "30px"
          } :
          windowSize.innerWidth > 501 && windowSize.innerWidth < 1001 ?
          {
            
          } :
          {}
        }
      >
        Ozone
      </ToggleButton>
      <ToggleButton
        value="nitrogendioxide"
        style={
          windowSize.innerWidth < 501 ?
          {
            fontSize: "10px",
            fontWeight: "600",
            width: "90%",
            height: "30px"
          } :
          {}
        }
      >
        Nitrogendioxide
      </ToggleButton>
    </ToggleButtonGroup>
  );
}