import React from 'react';
import Slider from '@mui/material/Slider';
import { useState } from 'react';

const SliderWithInfo = ({min,max,value,symbol,title}) => {
    const [slideValue,setSliderValue]=useState(value);

    
function valuetext(value) {
    return `${value}°C`;
  }
  
  return (
    <div>
        <div><p>{title}</p></div>
        <div>
            <h2>{symbol}{slideValue}</h2>
            </div>
            <div>
            <Slider
        aria-label="Temperature"
        defaultValue={value}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        shiftStep={30}
        step={10}
        marks
        min={min}
        max={max}
        onChange={(e)=>{setSliderValue(e.target.value)}}
      />

            </div>
  
      <div style={{display:"flex",justifyContent:"space-between"}}>
        <div><p>{symbol}{min}</p></div>
        <div><p>{symbol}{max}</p></div>
      </div>
    </div>
  )
}

export default SliderWithInfo