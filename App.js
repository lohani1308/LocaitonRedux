import React, { useState } from "react";
import { save } from "../src/components/locationSlice";
import { useDispatch, useSelector } from "react-redux";
import { Box, TextField, Button } from "@material-ui/core";

export default function App() {
    const [locationName, setLocationName] = useState('');
    const dispatch = useDispatch();
    const { location } = useSelector(state=>state)
    const handleData = (e) => {
        setLocationName(e.target.value);
    }
    const handleSave = () => {
        const ifPrestent = location.includes(locationName);
        if(locationName !== undefined && !ifPrestent) {
            dispatch(save(locationName));
            setLocationName('')
        } else {
            setLocationName('')
        }
    }
    return (
        <Box>
            <Box>
                <TextField 
                    onChange={handleData} 
                    value={locationName} 
                    label="Enter location name"
                />
                <Button
                    style={{margin: '10px'}}
                    variant="contained"
                    color="primary"
                    onClick={handleSave}
                >
                    add
                </Button>
            </Box>
            <Box>
                <h3> List of locations </h3>
            </Box>
            <Box>
                 {location.map((item) => <li>{item}</li>) }
            </Box>
        </Box>
    );
}