import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';


export default function CustomSliderSteps(props) {
    const { min ,max,onChange} = props
  return (
    <Box sx={{ width: '100%' }}>
      <Slider
        aria-label="Default"
        defaultValue={0}
        step={0.1}
        marks
        min={min}
        max={max}
        valueLabelDisplay="auto"
        onChange={(e,val)=>{
            onChange(val)}}
      />
    </Box>
  );
}