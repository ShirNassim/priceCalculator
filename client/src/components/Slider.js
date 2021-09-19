import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';


export default function DiscreteSliderLabel(props) {
    const { list ,onChange} = props
    console.log(list);
    
    return (
        <Box sx={{ width: '100%' }}>
            <Slider
                aria-label="Default"
                defaultValue={0}
                step={1}
                marks={list}
                valueLabelDisplay="off"
                onChange={(e,val)=>{
                 onChange(list[val])}}
                min={0}
                max={list.length}
                
            />
        </Box>
    );
}