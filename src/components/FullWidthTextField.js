import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function FullWidthTextField({ getData }) {

    const handleSearch = (event) => {
        if(event.key === "Enter"){
            const userValue = event.target.value
            getData(userValue)
        }
    }

  return (
    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
        margin: 'auto'
      }}
    >
      <TextField fullWidth label="Search..." id="fullWidth" onKeyPress={handleSearch}/>
    </Box>
  );
}
